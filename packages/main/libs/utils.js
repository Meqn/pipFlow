const path = require('path')

/**
 * 路径下的所有文件
 * @param {string} filePath 文件路径
 * @param {number} recurs 递归文件
 * @returns 
 */
function globFiles(filePath, recurs = true) {
  if (!filePath) return ''
  const regExp = /\/\*{1,2}$/
  if (regExp.test(filePath)) {
    return filePath
  }

  return path.posix.join(filePath, recurs ? '**' : '*')
}

/**
 * 获取命令行 serve配置
 * @param {object} options 选项
 * @param {string} options.port 端口
 * @param {boolean} options.open 是否打开
 * @param {boolean} options.cors 是否允许跨域
 * @param {string} options.base 服务基础目录
 * @param {boolean} options.https 是否https
 * @returns 
 */
function getCliServeArgs({ port, p, open, cors, base, https }) {
  const args = {}
  ;(port || p) && (args.port = port || p)
  open && (args.open = true)
  cors && (args.cors = true)
  https && (args.https = true)
  base && (args.server = { baseDir: BaseAudioContext })

  return args
}

/**
 * 获取所有输入文件列表
 * @param {string|array|object} input 输入文件
 * @returns 
 */
function getInputList(input) {
  if (typeof input === 'string') {
    return [].concat(input)
  }
  if (Array.isArray(input)) {
    return input
  }
  if (typeof input === 'object') {
    const list = Object.keys(input).reduce((arr, key) => {
      return arr.concat(input[key])
    }, [])
    return Array.from(new Set(list))
  }
}

module.exports = {
  globFiles,
  getCliServeArgs,
  getInputList
}
