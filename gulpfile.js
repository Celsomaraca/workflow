var gulp = require("gulp");
var del = require("del");

// Função que move todos arquivos scss para pasta dist 
gulp.task('move-scss',['limpar-html'], function(){

 	return gulp.src('./source/scss/*.scss')
 			.pipe(gulp.dest('./dist/scss'));		
 });

// Função que move todos arquivos html para pasta dist 
gulp.task('move-html',['limpar-html'], function(){

 	return gulp.src('./source/index.html')
 			.pipe(gulp.dest('./dist/'));		
 });

// Função limpar arquivos da pasta dist/css
 gulp.task('limpar-scss', function(){

 	return del('./dist/css/*.scss');
 			
 });

// Função limpar arquivo index da pasta dist
gulp.task('limpar-html', function(){

 	return del('./dist/index.html');
 
 });

// Função monitora alterações dos arquivos da pasta source/scss 
gulp.task('monitorar-scss', function(){

 	return gulp.watch('./source/scss/*.*',['move-scss']);

 });

// Função monitora alterações dos arquivos da pasta source com extensão html
gulp.task('monitorar-html', function(){

 	return gulp.watch('./source/*.html',['move-html']);
 	 				
 });
