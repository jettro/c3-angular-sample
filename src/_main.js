/**
 * @ngdoc module
 * @name C3jsChartDirective
 * @description 
 *   AngularJS Directive for the c3js library. With this directive we make it easier 
 *   to work with the great c3js libary. We provide a number of directives that make 
 *   it possible to declaritively create some charts.
 *
 *   This documentation can be found online at: {@link http://jettro.github.io/c3-angular-directive/api-docs/0.7/C3jsChartDirective.html}
 *  
 *   More information about the directive can be found here {@link http://jettro.github.io/c3-angular-directive/}
 *
 *   The documentation is generated using jsdoc, and this plugin: {@link https://github.com/allenhwkim/angular-jsdoc}
 */
(function (root, factory) {
    if(typeof define === 'function' && define.amd) {
        define(['c3', 'd3', 'angular'], factory);
    } else if(typeof module === 'object' && module.exports) {
        factory(require('c3'), require('d3'), require('angular'));
    } else {
        factory(root.c3, root.d3, root.angular);
    }
}(this, function(c3, d3, angular) {
angular.module('gridshore.c3js.chart', []);
