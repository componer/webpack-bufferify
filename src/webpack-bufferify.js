import RawSource from 'webpack-sources/lib/RawSource'

export default class {
    constructor() {}
    apply(compiler) {
        compiler.plugin('emit', (compilation, callback) => {
            let assets = compilation.assets
            for (let key in assets) {
                if (assets.hasOwnProperty(key)) {
                    let asset = assets[key]
                    let content = asset.source()
                    // begin to modify content
                    content = this.process(content, asset, assets, compilation, compiler) || content
                    assets[key] = new RawSource(content)
                }
            }
            callback()
        })
    }

    // rewrite this property when you create your own webpack plugin
    process(content, file, assets, compilation, compiler) {}
}
