// commonJS规范的模块
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/variables.scss"`
            }
        }
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3000/",//接口的域名
                pathRewrite: {
                    "^/api": ""//需要将/api重写为''
                },
                secure: false,// 如果是https接口，需要配置这个参数
                changeOrigin: true// 如果接口跨域，需要进行这个参数配置
            }
        }
    }

}

