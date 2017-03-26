import WebpackBufferify from '../src/webpack-bufferify'
import webpack from 'webpack'
import fs from 'fs'

const time = Date.now().toString()

describe('Webpack Bufferify Unit Test', () => {
    it('test', done => {
        class MyContent extends WebpackBufferify {
            process(content) {
                return content.replace('[time]', time)
            }
        }
        let config = {
            entry: __dirname + '/demo.js',
            output: {
                path: __dirname,
                filename: 'demo.bundle.js',
                libraryTarget: 'commonjs2',
            },
            plugins: [
                new MyContent()
            ],
        }
        webpack(config).run((error, handle) => {
            let obj = require(__dirname + '/demo.bundle.js')
            expect(obj.time).toBe(time)
            done()
        })

    })
})
