+function(t,r,n,i){function s(t){if(y)return y=0,void S();if(F&&t in{89:1,78:1})switch(F=0,t){case 89:S();break;case 78:y=1,p()}if(!F){if(P)return P=0,p(),void l();if(t in{27:1,80:1}&&(P=1,clearTimeout(R),p()),t in{37:1,38:1,39:1}){var r=e(O);switch(t){case 37:r.x=0===r.x?0:r.x-1;break;case 39:var s=10-i[r.i];r.x=r.x===s?s:r.x+1;break;case 38:r=e(O,{i:n[O.i]}),r.x=Math.min(r.x,10-i[r.i])}O=a(r)||O,f(),p()}if(t in{40:1,32:1}){switch(t){case 40:b();break;case 32:for(;b(););}p(),l()}}}function e(t,r){return Object.assign({x:4,y:0,c:0,i:19*Math.random()<<0},t,r)}function u(t,r,n){return 10*(n+t/4<<0)+r+t%4}function o(t,r){return t.repeat(r)}function a(n){if(!r[n.i].some(function(r,i){if(i=u(i,n.x,n.y),r&&(i>=200||t[i]))return 1}))return n}function c(){for(var r=200,n=10,i=0,s=0;r-=n;)t.slice(r,r+n).every(parseFloat)&&(t.splice(r,n),s+=n,i<4&&i++,++E%10===0&&(g=g<9?g+1:1));for(;s--;)t.unshift(0);A+=[0,50,150,350,1e3][i]*g,t.some(parseFloat)||(A+=2e3*g)}function f(){x=t.slice(),r[O.i].map(function(t,r){r=u(r,O.x,O.y),void 0!==x[r]&&(x[r]=x[r]||t)})}function b(){var r=e(O,{y:O.y+1,c:O.c+1});return O=a(r)||O,f(),O===r?1:O.c?(A+=10*g,O=j,j=e(),t=x,c(),x=t,void f()):(F=1,void(d&&d.finish(A)))}function m(){var t="\n\r",n=o(" ",28),i=n+"<!",s="!>"+n,e=s+i,u=String.fromCharCode(9646),a=o(u,2),c=o(" ",80)+t;if(y)return n=o(" ",19),h=[-58917640,-942919668,858981133,-2096247688,-1023360221,53509168,-858816512].map(function(t){return(o("0",10)+(t>>>0).toString(2)).substr(-32)}).join("").substr(0,210).split("").map(function(t){return[" ",u][t]}).join("").match(/.{1,42}/g).join(n+t+n),void(h=o(c,8)+n+h+n+t+o(c,4)+o(" ",33)+"PRESS ANY KEY"+o(" ",34)+t+o(c,7));h=x.map(function(t){return[" .",a][t]}).join("").match(/.{20}/g).join(e),h=i+h+e+o("=",20)+s+n+"  "+o("\\/",10)+"  "+n;var f=E.toString();f="ROWS HIT:"+o(" ",15-f.length)+f,h=f+h.substr(24);var b=A.toString().split("").reverse().join("").match(/.{1,3}/g).join(" ").split("").reverse().join("");b="SCORE:"+o(" ",18-b.length)+b,h=h.substr(0,80)+b+h.substr(104),h=h.substr(0,160)+"LEVEL:"+o(" ",17)+g+h.substr(184),r[j.i].map(function(t,r){r=80*(10+2*r/8<<0)+20+2*r%8,t&&(h=h.substr(0,r)+a+h.substr(r+2))}),h=h.substr(0,138)+"UP ARROW: ROTATE"+h.substr(154),h=h.substr(0,216)+"DOWN ARROW: SOFT DROP"+h.substr(237),h=h.substr(0,298)+"SPACEBAR: HARD DROP"+h.substr(317),h=h.substr(0,380)+"ESC, P: PAUSE"+h.substr(393),P&&(h=h.substr(0,757)+"PAUSED"+h.substr(763)),F&&(h=h.substr(0,756)+"TRY AGAIN?"+h.substr(766),h=h.substr(0,836)+"   Y/N    "+h.substr(846)),h=h.match(/.{1,80}/g).join(t),h=c+h+t+o(c,2)}function p(){m(),d.nextFrame&&d.nextFrame(h)}function v(t){d=t,d.nextFrame(h)}function l(){clearTimeout(R),F||y||(R=setTimeout(function(){b(),p(),l()},100*(10-g)))}function S(){j=e(),O=j,t=T,g=1,A=0,E=0,f(),p(),l()}var h,x,R,g,A,E,j=e(),O=j,T=t.slice(),d={},F=0,P=0,y=1;S(),window.TETRIS={pressKey:s,on:v}}("0".repeat(200).split("").map(parseFloat),[785,23,547,116,51,114,305,39,562,15,4369,99,306,54,561,802,113,275,71].map(function(t){return(t>>>0).toString(2).split("").reverse().map(parseFloat)}),[1,2,3,0,4,6,7,8,5,10,9,12,11,14,13,16,17,18,15],[2,3,2,3,2,3,2,3,2,4,1,3,2,3,2,2,3,2,3]);