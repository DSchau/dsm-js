webpackJsonp([0x81b8806e4260],{219:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{html:'<p>"Transducer" sounds like just another jargony functional programming term and,\nyeah, it kind of is...</p>\n<p>Consider this example (a classic intro to FP in JS example):</p>\n<pre><code class="language-js">[1, 2, 3, 4, 5]\n  .map(x => x * x)\n  .filter(x => x % 2)\n</code></pre>\n<p>Performance-minded people might point out that we are looping through the array 2\ntimes. And while that isn\'t going to cause any problems with an array of this size\nand with these simple operations, it can become an issue when the scale is different.</p>\n<p>Here\'s where transducers come in. (More FP jargon coming...) Transducers let us\ncompose our transformation functions (the map and filter) into a single reducer,\nwhich we can use to perform the same functionality on the array, but we\'ll only\nloop over it 1 time.</p>\n<p>This talk will go over the basics of map, filter, reduce and function composition.\nThen build up gradually to transducers.</p>',frontmatter:{meeting:{date:"March 13, 2018",time:{start:"6:00pm",end:"7:00pm"}},sponsor:{name:"Robert Half",site:"https://www.roberthalf.com/ia-des-moines"},host:{location:"Gravitate, 317 6th Ave, Suite 10"},talk:{title:"An Introduction to Transducers",speaker:"Eric Ponto"}}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-92c47407b51c454bb436.js.map