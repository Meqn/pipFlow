const path = require('path')
const gulp = require('gulp')
const logger = require('diy-log')
const { colors, symbols } = logger
const gulpFilter = require('gulp-filter')
const rev = require('gulp-rev')
const jsonEditor = require('gulp-json-editor')
const gulpPlumber = require('gulp-plumber')

/**
 * 转换文件 hash 方式
 */
function transformHash(json) {
  let newObj = {}
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      let hash = path.basename(json[key]).split('-').pop().split('.')[0]
      newObj[key] = key + '?' + hash
    }
  }
  return newObj
}

// 创建文件过滤器
function createFilter(filter) {
  if (typeof filter === 'string') {
    return gulpFilter('**/*.{js,mjs}', { restore: true })
  }
  return filter
}

/**
 * 生成文件指纹 和 输出文件
 * 1. fileHash 作为文件名([name]-[hash])，则输出 rev后的文件及manifest.json
 * 2. fileHash 作为参数`?`([name]?[hash])，则仅输出文件及 manifest.json
 * @param {Array} processes 所有流程
 * @param {object} params 其他参数
 * @param {string} params.dest 输出目录
 * @param {string} params.fileHash 文件指纹
 * @param {string} params.filter 文件过滤
 */
function outputFiles(processes, {
  fileHash,
  dest,
  filter
}) {
  if (fileHash) {
    const fileFilter = createFilter(filter)
    if (fileHash === '?') {
      processes.push(gulp.dest(dest))
      if (fileFilter) {
        //过滤指定文件, 不输出 rev后的文件
        processes.push(fileFilter)
        processes.push(rev())
        processes.push(fileFilter.restore)
      }
      processes.push(rev.manifest({ merge: true }))
      processes.push(jsonEditor(function(file) {
        return transformHash(file)
      }))
      processes.push(gulp.dest(dest))
    } else {
      if (fileFilter) {
        processes.push(fileFilter)
        processes.push(rev())
        processes.push(fileFilter.restore)
      }
      processes.push(gulp.dest(dest))
      processes.push(rev.manifest({ merge: true }))
      processes.push(gulp.dest(dest))
    }
  } else {
    processes.push(gulp.dest(dest))
  }
}

/**
 * 生成 gulp.src 选项
 * @param {object} options 选项
 * @returns 
 */
function createSrcOptions({ name, base }) {
  const ret = {}
  if (name) {
    // 增量构建能,加快执行时间
    ret.since = gulp.lastRun(name)
  }
  if (base) {
    ret.base = base
  }
  return ret
}

/**
 * plumber 错误处理
 */
const plumber = (function() {
  function errorHandler(error) {
    const { name, plugin, message } = error
    logger.time(symbols.error, colors.red(`${plugin} ${name} : ${message}`))
  }

  return {
    handler() {
      return gulpPlumber({ errorHandler })
    },
    stop() {
      return gulpPlumber.stop()
    }
  }
})();

/**
 * 自定义处理流程
 * @param {Array} plugins 流程
 */
function putProcesses(processes, plugins) {
  if (Array.isArray(plugins) && plugins.length > 0) {
    processes.push(...plugins)
  }
  return processes
}

module.exports = {
  outputFiles,
  createSrcOptions,
  plumber,
  putProcesses
}
