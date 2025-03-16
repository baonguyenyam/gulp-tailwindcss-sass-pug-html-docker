// GULP FILE by Nguyen Pham
import gulp from 'gulp';
import browserSync from 'browser-sync';
import dotenv from 'dotenv';
browserSync.create();
const template_config = dotenv.config().parsed;

// Tasks
import cleanDist from './tasks/cleanDist.js';
import babelCompile from './tasks/babelCompile.js';
import babelCompilePro from './tasks/babelCompilePro.js';
import sassCompile from './tasks/sassCompile.js';
import browserSyncInit from './tasks/browserSyncInit.js';
import copyCSS from './tasks/copyCSS.js';
import copyJS from './tasks/copyJS.js';
import copyImages from './tasks/copyImages.js';
import ejsCompile from './tasks/ejsCompile.js';
import pugCompile from './tasks/pugCompile.js';
import htmlCompile from './tasks/htmlCompile.js';
import sassCompileProduct from './tasks/sassCompileProduct.js';
import compressCSS from './tasks/compressCSS.js';
import compressJS from './tasks/compressJS.js';
import formatHtmlSiteApp from './tasks/formatHtmlSiteApp.js';
import cleanCSS from './tasks/cleanCSS.js';
import copyData from './tasks/copyData.js';
import htmlReplace from './tasks/htmlReplace.js';
import createSitemap from './tasks/createSitemap.js';
import htmlCompress from './tasks/htmlCompress.js';
import replaceMeta from './tasks/replaceMeta.js';

function compileTemplates(done) {
    if (template_config.TEMPLATE_COMPILE === 'pug') {
        return pugCompile();
    } else if (template_config.TEMPLATE_COMPILE === 'ejs') {
        return gulp.series(ejsCompile, htmlReplace, replaceMeta)(done);
    } else {
        return gulp.series(htmlCompile, htmlReplace, replaceMeta)(done);
    }
}

function compressHTML(done) {
    if (template_config.COMPRESS_HTML === 'true') {
        return htmlCompress();
    } else {
        return gulp.series(htmlCompress, formatHtmlSiteApp)(done);
    }
}

export const inDev = (done) => {
    process.env.NODE_ENV = 'development';
    done();
};

export const inProd = (done) => {
    process.env.NODE_ENV = 'production';
    done();
}

export const basic = gulp.series(
    cleanDist,
    copyCSS,
    copyImages,
    copyJS,
    copyData,
    compileTemplates,
);

export default gulp.series(
    inDev,
    basic,
    babelCompile,
    sassCompile,
    browserSyncInit,
);

export const build = gulp.series(
    inProd,
    basic,
    babelCompilePro,
    sassCompileProduct,
    compressCSS,
    compressJS,
    cleanCSS,
    createSitemap,
    compressHTML,
);