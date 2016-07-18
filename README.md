## JavaScript練習問題集

**2016/07/19更新**


**問1**

```const afa = {a: 'a'}```と```const ee = {b: 'b'}
```
をmergeした```m```
を出力してください
e.g```{a:'a',b:'b'}```

```js
const afa = {a: 'a'};
const ee = {b:'b'};
const m = Object.assign(afa, ee);
m //{a: "a", b: "b"}
```

**問2**

```js
const uu = ['oo','pp','ll','jj','hh','kk','mm'];
```
のjj,hh,kk要素を新たな配列として返してください

```js
const yy = uu.slice(-4,-1);
//or
const yy = uu.slice(3,-1);
```

**問3**
```
const arry = ['eee','ccc’]
```
の要素をconsole出力してください e.g ```'eee'```と```'ccc'```

```js
const arry = ['aa','ccc'];
arry.forEach(function(key,i){
 console.log(key)
})
//'aa'
//'ccc'
```

**問4**

```js
const arry = [‘eee’, ‘ccc’]
```
を要素にindexを足された文字列を出力してください```e.g 'eee0'```と```'ccc1'```

```js
const arry = ['aa','ccc'];
arry.forEach(function(key,i){
 console.log(key + i)
})
//'aa0'
//'ccc1'
```

**問5**

```
const ee = [1,2]
```
と定義して配列かどうかを評価してください
e.g true

```js
Array.isArray(ee) //true

//ee instanceof Array //true
//instanceof比較は継承しているオブジェクトのインスタンス比較なので
// ee instanceof Objectでもtrueが返ってく る
```

**問6WIP**

```js

// var aa = 'fafa'
// ```
// を出力した後完全に削除し、削除されたことを出力してくださいe.g
// "aa is not defined"

```js
// var aa = 'fee';
// aa
// //'fee'
// delete aa
// //true
// aa
// //'aa is not defined'
```

**問7**

```js
ee(2,4,5)
```
を実行したら引数が全て配列で返る関数eeを定義しなさい
[参照](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

```js
function ee(){
 return Array.from(arguments)
}
ee(2,4,5)//[2.4,5]
```

**問8**

下記

```js
const obj = {
　key: 'eee',
　key2:'ccc'
};
```
の中のkeyとvalueを全て出力しなさい

```js
const obj = {
  key: 'eee',
  key2:'ccc'
};
for( key in obj){
  console.log( key + ':' + obj[key])
}
```

**問9**

```js
var array3 = ['fafa','eee','ccc']
```
配列の中の全ての要素を結合し、1つの文字列として出力してください。但し、array3.lengthはif文の外でcountとして定義すること

```js
var array3 = ['fafa','eee','ccc'];
var ee = '';
var count = array3.length;
for(var i= 0; i < count; i++){
  ee += array3[i];
}
ee
//'fafaeeeccc'

//別解答
array3.join("");
//'fafaeeeccc'
```

**問10**

Array.isArrayが実行できない環境を想定して```var ee = [1,2]```が配列であることを検査できる拡張された関数を定義してください
ヒント
if分岐、Object.prototype、返り値 [object Array]

//51P

```js
if(typeof Array.isArray === 'undefined'){
 Array.isArray = function(arg){
  return Object.prototype.toString.call(arg) === '[object Array]';
 };
}
```

**問11**
```js
var arry4 =[{id:34343,name:'morita'},{id:89,name:'kenji'},{id:7827,name:'uro'},{id:2739,name:'kenji'}]
```
をid番号が若い順にソートしたオブジェクトを含む配列を出力してね

```js
var arry4 = [
  {id:34343,name:'morita'},
  {id:89,name:'kenji'},
  {id:7827,name:'uro'},
  {id:2739,name:'kenji'}
]
arry4.sort(function(a,b){
 if(a.id > b.id) return 1;
 if(a.id < b.id) return -1;
});
/*
[[object Object] {
  id: 89,
  name: 'kenji'
}, [object Object] {
  id: 2739,
  name: 'kenji'
}, [object Object] {
  id: 7827,
  name: 'uro'
}, [object Object] {
  id: 34343,
  name: 'morita'
}]
*/
```

**問12**

```
var a, b;
```
の変数はデフォルトとしてaは5、bは7を持ち、aに1を代入してconsole出力してください。

```js
var [a=1, b=7] = [1];
console.log(a, b);
//1 7
```


**問13**

next()を実行しただけ返り値が1増える関数を定義してください


```js
var setUp = function(){
  var count = 0;
  return function(){
return (count += 1);
  }
};
var next = setUp();
next();//1
next();//2
next();//3
```

**問14**

```js
class Fafaf {}
```
を作成した際の内部の動きを教えてください。

WIP

**問15**

配列
```
myArray = ['kkk1','kkk2','kkk3','kkk4','kkk5']
```
の0〜2番目の要素をそれぞれ

```
red,green,yellow
```
に置き換えてください。また実行した際の返り値を教えてください

```js
const myArray = ['kkk1','kkk2','kkk3','kkk4','kkk5'];
myArray.splice(0,2,'green','red','yellow');//インデックス0から2つの要素を削除。
//返り値:['kkk1', 'kkk2']
//myArray:['green', 'red', 'yellow', 'kkk3', 'kkk4', 'kkk5']
```

**問16**

```
myArray= ['kkk1','kkk2','kkk3','kkk4','kkk5'];
```
の2つ目〜4つ目の要素を取り出し配列とし出力しなさい。実行された後のMyarrayの要素を教えてください

```js
var myArray = ['kkk1','kkk2','kkk3','kkk4','kkk5'];
var fafa = myArray.slice(1,4);
console.log(fafa);//['kkk2', 'kkk3','kkk4']
//Myarrayは['kkk1','kkk2','kkk3','kkk4','kkk5']で変わらず
```

**問17**

```js
var myArray = ['kkk1','kkk2','kkk3','kkk4','kkk5'];
```
の全ての要素を"/"で結合した文字列を出力し、さらにその文字列を"/"区切りで配列に直してください

```js
var myArray =  ['kkk1','kkk2','kkk3','kkk4','kkk5'];
myArray.join('/').split('/');
```

**問18**

配列
```js
var gArray =  ['おはよう','こんにちは','おやすみなさい'];
```
の要素がランダムに出力される関数を書いてください。(配列に要素が追加される事を仮定してたものにしてください)

```js
var gArray =  ['おはよう','こんにちは','おやすみなさい'];
var g = gArray[Math.floor(Math.random() * 3)];
g//おはよう or こんにちは or おやすみなさい
```

**問19**

Objectオブジェクトで空のオブジェクトを作成し、値が42のプロパティpを持ちなさい

```js
var o = Object.create({}, { p: { value : 42 }})
o.p //42
```


**問20**

オブジェクトWhoを作成し、初期化時に'morita'(String)を渡しnameプロパティに代入、インスタンス「o」のメソッドを使いWho.prototype.name値が返ってくるいわゆる「classのようなもの」を作成してください
※インスタンスメソッドはprototype継承で代入してください

```js
function Who(name){
 this.name = name;
};
Who.prototype.getName = function(){
 console.log('Myname is ' + this.name);
};
var o = new Who('morita');
o.getName()
```

**問21**

浅いコピー(shallow copy)と深いコピー(deep copy)の違いを説明してください

```js
//**shallow copy**
//プロパティ値や要素値だけのコピーでその先の参照まではコピーしない
//例
var arr = [{x : 2}];//オブジェクト参照をもつ配列
var arr2 = [].concat(arr);//要素をコピー
arr2[0].x = 123;//変数arr2から見える要素の参照先オブジェクトを変更。
arr[0].x//変数arrから変更が見える(shallowだから)
//123

//**deep copy**
//コピー元とコピー先が別のオブジェクトを参照していること。プロパティが別のオブジェクトを参照していれば参照崎のオブジェクトも含めてコピーします。deepcopyが必要な場面はない。自分で実装する必要がある。パーフェクトP199

```

**問21**

下記

```js
var array = ['e','a','k','B','c'];
array.sort();
```
を実行した結果を答えてください

```js
['B', 'a', 'c', 'e', 'k']

//note 順番は文字エンコーディングによって決まる
//要素に数値があった場合文字列に置き換えられる
```

**問22**

上記の配列を大文字小文字区別なく順番通りにしてください。期待する値```[a','B','c', 'e','k']```

```js
var array = ['e','a','k','B','c'];
array.sort(function(a,b){
 return a.toUpperCase() > b.toUpperCase() ? 1 : -1 ;
});

//['a', 'B', 'c', 'e', 'k']
```

**問23**

このような```[20,100,3,35,0]```

比較する配列の要素が数値の場合、「降順」にsortしてください
期待する結果```[100, 35, 20, 3, 0]```

```js
var numArray = [20,100,3,35,0];
numArray.sort(function(a,b){
 return b - a;
});
[100, 35, 20, 3, 0]

//昇順の場合
return a - b
```


**問24**

文字列```'10'```をNumber型にし、型判定し、数値かどうか評価後、文字列に変換してください

```js
var a = parseInt('10');
typeof a
isNaN(e);
a.toString();
//'10'
```

**問25**

カーリー化されたadd(1)(2)もしくはadd(1,2)
を実行した際両方とも返り値3になる関数を定義しなさい。p85

```js
function add(x, y){
 if(typeof y == 'undefined'){//部分適用
  return function(y){
return x + y
  }
 }
 //完全適用
 return x + y
}
add(1)(2) //3
add(1,2) //3
```

**問26**

クロージャーを使ったファクトリー関数。

```js
var fafa = Factory('morita');
fafa.introduce()
//'morita'
```
上記のような実行をしたら渡したname(ここではmorita)が表示されるメソッドintroduceを持つファクトリー関数を定義しなさい。


```js
function Factory(name){
 function getName(){
  return name;
 };
 return {
  introduce : function(){
    console.log(getName());
   }
 }
};
var fafa = Factory('morita');
fafa.introduce()
//morita
```

**問27**
関数```sayHi```に自分の名前を引数で渡した際に```hello!yourname```、何も渡さない場合```hello!```
と返す関数を作成し、それをapplyで実行してください。また
applyの第一引数にnullを渡す場合とオブジェクトを渡す場合のそれぞれのthisは何を指しますか答えてください
p83

```js
var sayHi = function(name){
 return 'hello!' + (name ? name : '');
};
sayHi('kenji');
sayHi();
sayHi.apply(null,['kenji']);//関数呼び出し
var greeting = {
  sayHi: function(name){
    return 'hello!' + (name ? name : '');
  }
};
//メソッド呼び出し
greeting.sayHi.apply(greeting,['kenji']);//渡す
greeting.sayHi.apply(greeting);//渡さない


//関数呼び出しの場合thisはwindowを指し、nullを渡す、
//メソッド呼び出しの場合thisはオブジェクトを指しオブジェクトの参照を渡す
```

**問28**
```js
var obj = {x : 2, y: 3};
```
このobjをプロパティ追加不可、削除変更は可能にし、プロパティ追加不可か否かの判定メソッドでtrueが返る事を確認した後、objのkeyを列挙してください。

```js
var obj = {x : 2, y: 3};
Object.preventExtensions(obj);
Objcet.isExtensible(obj);//true
Object.key(obj);
//['x', 'y']
```

**問29**

```
var obj = {}
  ```
  と等価をObjctメソッドで生成してください

```js
var obj = Object.create(Object.prototype);

```

**問30**
```js
var obj = {x : 2, y: 3}
```
と等価をObjectメソッドで生成してください

```js
var obj = Object.create(Object.prototype, {
   x : {value: 2, writable: true, enumerable: true, configurable: true},
   y : {value: 3, writable: true, enumerable: true, configurable: true}
})
```


**問31**
```js
var obj = { x : 2}
```
の属性を出力してください

```js
Object.getOwnPropertyDescriptor(obj, 'x');
// {
//  configurable: false,
//  enumerable: false,
//  value: 2,
//  writable: false
//.fseventsd/}
```


**問31**
```js
var obj2 = {x : 2};
```
にObjectメソッドを用いてプロパティ```y```、値```2```、```プロパティ追加可能```を定義して、Objectメソッドで情報(値と属性)を返してくださいP149

```js
var obj2 = {x : 2};
Object.defineProperty(obj2, 'y', {value: 3, enumerable: true});
//[object Object] {
//  x: 2,
//  y: 3
//}

Object.getOwnPropertyDescriptor(obj2, 'y')
// {
//  configurable: false,
//  enumerable: true,
//  value: 3,
//  writable: false
//}
```

**問32**
実引数の数を出力、第一引数を出力する関数fを実行してください

```js
function f(){
 console.log(arguments.length)
 console.log(arguments[0])
}
f(2)
//1
//2
```

**問33**

```js
var arr = ['2','23','0','16'];
```
を小さい順にソートしてください。その後ソートをできないようにread-onlyにしてください

```js
var arr = ['2','23','0','16'];
arr.sort(function(a,b){ return a - b ;});
//['0', '2', '16', '23']
Object.freeze(arr);
//['0', '2', '16', '23']
arr.sort();
//.fseventsd/'Cannot assign to read only property '1' of [object Array]'
```

**問34**

```var arr = [3,4,5];```をconcat以外で新たな配列として```arr2```にコピーしてください。その後```arr2[0]= 123```を代入するとarrは何を出力するか答えなさい

```js
var arr = [3,4,5];
var arr2 = arr.slice(0, arr.length);
arr2
//[3, 4, 5]
arr2[0] = 123;
arr
//[3, 4, 5]//変数arrから変更は見えない(要素をコピーしているから)
arr2
//[123, 4, 5]


//別解

var arr2 = arr.map(ele => ele);
arr2
//[3, 4, 5]
```

**問35**
JSON文字列```{'x' : 1, 'y': 2}```をオブジェクトに変換してJSON文字列に変換してください。またなぜ下記の2つはエラーになるか答えてください。

```js
var s = JSON.parse(''foo'');
var arr = JSON.parse('{x : 1}');
```

```js
var s = '{'x' : 1, 'y': 2}';
var obj = JSON.parse(s);
JSON.stringify(obj);
//'{\'x\':1,\'y\':2}'
//**下記はなぜエラーになるか**
var s = JSON.parse(''foo'');
//シングルクォーテーションの文字列はエラー-
var arr = JSON.parse('{x : 1}');
//プロパティ名が文字列でないとエラー
```

**問36**
strict modeの代表的な制約を挙げて説明してください。

```
- 暗黙のグローバル変数の禁止
(標準モードではvarを伴わず変数に値を割り当てると現在のスコープに関係なくグローバルオブジェクトにその名前のプロパティを追加してしまう。strictモードでは明示的にエラーになる)
- 関数内でthis参照がグローバルオブジェクトを参照しない

- NaN、Infinity、undefinedのグローバル変数を読み込み専用

- 重複のプロパティ名とパラメータ名を禁止

リテラルでのオブジェクト生成時同じ名前を持つプロパティを複数定義する場合や、関数に同じ名前を持つパラメータを複数与える場合標準モードでは後に定義されたものが優先されますがstrictモードではこのようなコードを実行する際にエラーが発生します。
'use strict';

//オブジェクト生成時にエラー//標準モードで実行する場合は後に定義されたものが反映される

var object = {
  prop1 : 100,
  prop1 : 200
}

//関数定義字にエラー発生

function func(val, val){
  console.log(val);
}
func(1, 2);
//2


パラメータとargumentsがそれぞれ独立
。
標準モードでは関数にパラメータを設定している場合、関数本体におけるパラメータの名前を持つ変数はパラメータの一にあるargumentsオブジェクトの要素のエイリアスとして定義されていました
。つまり最初のパラメータとargument[0]は、名前は異なるものの、その実体は同じものでした。
strictモードではこれが変更されパラメータとargumentsは独立した存在として扱われるようになり、それぞれ個別の引数が割り当てられます。
(function (param){
  'use strict';
  //引数がプリミティブ型の場合はStrictモードと標準モードで動作がことなる。

  pram = 'param';
  console.log(param, arguments[0]);
  //'param'
  //(標準モードの場合)
  'param' 'param'

  arguments[0] = 'arg';
  console.log(param, arguments[0]);
  //'param' 'arg';
  //標準モードの場合 'arg' 'arg'
  })('引数') //関数に文字列を渡して実行

但し、引数がオブジェクトの場合はパラメータとargumentsに同じオブジェクトへの参照が格納されるためプロパティへのアクセスは事実上同じものへのアクセスとなります。

arguments オブジェクトへの値の割り当ての禁止

関数実行時に与えられた引数はarguments変数に格納されます。Strictモードではこのargumentsオブジェクトに別の新たなオブジェクトを割り当てることができません。
'use strict';

//arguments変数を別の値で置き換えることができない

(function(){
  //SyntaxErrorが発生

  arguments = [100, 200, 300];//別の値でまるまる置き換えている。。

  })();

  //argumentsへの要素の追加や変更は可能

  (function(){
    //要素の置き換え
    arguments[0] = 200;
    要素の追加
    arguments[1] = 300;
    console.log(arguments[0], arguments[1]);
    //200, 300
    })()

    - arguments.calleeアクセスの禁止

再帰などの目的で関数内でその関数自身にアクセスする必要がある場合にはarguments.calleeではなく、関数名を使って呼び出します。関数式を使用する場合は無名関数にするのではなく、その関数に名前を与えておく必要があります。
8進数リテラルの禁止

'use strict';
//8進数リテラルを使用するとsyntaxError
//標準モードで実行する場合はあoctに数値8が割り当てられる。
var oct = 010;

- Functionオブジェクトのcallerプロパティのアクセス禁止

ブロック内の関数分の禁止


'use strict';
//ブロック内部の関数宣言はsyntaxError
if(true) {
  function func(val){return  val;}
}

//ブロック内部での関数式の定義は問題なし

if(true){
  val fun = function(val) {return val};
}


delateによる変数や関数の削除の禁止

標準モードでは演算対象が削除できない変数や関数であっても暗黙的に失敗していた。strictモードではエラーを発生させる。Configurable属性にfalseが設定されている再設定不可プロパティの削除時もエラーが発生します。

- with文の禁止
使用するとSyntaxErrorが発生する

- evalが新しいシンボルを作らない
-
evalコードが独自のスコープで動作する。標準モードでevalに文字列を渡してコードを実行するとそのコードは呼び出しているスコープ上で動作する。つまりevalの実行中に宣言された変数は呼び出したスコープに定義される。

strictモードではevalで実行されるコードが自身のスコープを持ちます。このスコープから外側のスコープにある変数にはアクセスできますが外側のスコープに変数を定義することはできません。関数スコープと同じです。


//'use strict'は複数のstrictモード記述のあるjsファイルの結合されて本番のファイルを構成している場合先頭のファイルの先頭部に置いた'use strict'文によって結合されたスクリプト全体がstrictモードになりその結果コードが誤作動するという事例があった。
ある関数がstrictモードで動作するかの判定は呼び出し時のスコープではなく、定義されたスコープで行われる。Strictモードのコード内で呼び出しても標準モードで定義された関数は標準モードで実行される。argumentsとevalを使っているか？使っていたらそこがstrictモードかどうかを確認しましょう。※scriptタグはタグ単位でスクリプトの実行環境を生成する。そのため<script>タグごとにモードの選択をする。Strictモード内で<script>タグを動的に生成する場合も新しく生成されたタグ内のScriptは指示序文を与えなければ標準モードで動作します。node.jsのrequire()で呼び出すコードは呼び出し元の指示序文に影響されません。strictでも呼び出すコードのコンテクストが標準モードならそのコードは標準モードで動作する

//strictモードの即時実行関数

(function(){
  'use strict';
  //loose関数の中身はStrictモードではエラーが発生するコード
  loose();
  })()
  function loose(){
    //varを忘れて、8進数リテラルを使用
    a = 010;
  }

  //loose関数は標準モードで動作するため、aがグローバルオブジェクトのプロパティとして追加されている
  console.log(a);
  //8

//thisの値にnullやundefinedが競ってされていた場合標準モードではthisはこれらの代わりにグローバルオブジェクトを参照する。strictモードではこの強制的な変換は行われずthisにはそれぞれの値がそのまま格納される。this値にプリミティブ値が競ってされた場合標準モードではそのthisはプリミティブ値の型に対応するプリミティブラッパー型オブジェクトを参照するがstrictはこの型変換もしない。
```

**問37**
for in文に関する注意点を3つ挙げてください

```
- プロパティを列挙する順序がオブジェクトリテラルと配列リテラルで違う
- 列挙できないプロパティがある(Array.lengthなど)
- プロトタイプ継承したプロパティも列挙する
```

**問38**
これは2秒後に```'hello!kenji!'```とconsole.logに出力されることを期待していますが動きません。正しく修正してください。なぜそうなるか理由もください。

```js

WIP
```

**問39**
配列```var arr = ['f','o','x','k'];```を要素順に出力させなさい

```js
var arr = ['f','o','x','k'];
for(var j of arr){
console.log(j)
}


//別解

var arr = ['f','o','x','k'];
arr.forEach(function(ele){
 console.log(ele);
 }
)
```

**問40**
またイテレーターを使い順番にす出力しなさい

```js
var arr = ['f', 'o', 'x', 'k'];
var eArr = arr[Symbol.iterator]();
eArr.next().value //f
eArr.next().value //o
eArr.next().value //x
eArr.next().value //k
```

**問41**
配列```['angel', 'clown', 'drum', 'mandarin', 'surgeon']```
のインデックス2に'morita'という要素を加えなさい。```['angel', 'clown', 'morita', 'drum', 'mandarin', 'surgeon']```

```js
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'surgeon'];
myFish.splice(2, 0 , 'morita');
myFish//['angel', 'clown', 'morita', 'drum', 'mandarin', 'surgeon']
```

**問42**
これ```var o = {};```と同じ意味を持つコードをObjectを使って生成しなさい


```js
var o = Object.create(Object.prototype);
```

**問43**
{p: 42}となるようなオブジェクトをObjectメンバを使って生成しなさい

```js
o = Object.create({}, {p: {value : 42}});
```

**問44**

```
1234
```
という数字を文字列に変更後、1文字ずつ配列の要素として取り出しなさい

```js
var count = 1234;
var ee = count.toString();
var arr = [];
for(var i = 0; i < ee.length; i++){
 arr[i] = ee.charAt(i);
}
console.log(arr)//['1','2','3','4'];
```

**問45**
[こちら](http://jsbin.com/wacumupuqo/1/edit?js,console,output)を実行するとundefinedが返ってきます。nameが返るように修正してください。またそうなる理由を述べてください

理由thisの実行コンテキストがPersonを差していないから。
[答え1](http://jsbin.com/gikakeyepu/1/edit?js,console,output)

**問46**

```js
var Speaker = {
 say : function(wordsGetter){
  var words = wordsGetter();
   alert(words);
 }
};
function Person(nickname){
 this.nickname = nickname;
}

Person.prototype.sayName = function(){
    self = this;
    Speaker.say(function(){
      return self.nickname;
    });
};
var person = new Person('moriken');

person.sayName();
```

[答え2](http://jsbin.com/wacumupuqo/edit?js,console,output)

```js
var Speaker = {
 say : function(wordsGetter){
  var words = wordsGetter();
   alert(words);
 }
};
function Person(nickname){
 this.nickname = nickname;
}

Person.prototype.sayName = function(){
    Speaker.say(function(){
      return this.nickname;
    }.bind(this));
};
var person = new Person('moriken');

person.sayName();

```

**問47**
こちらの関数のaを2としてbindした後に

```
var mul = function(a,  b) {
     alert(a * b);
};
```

下記のような配列内にある連想配列のkey、mail値を配列に格納して返せ

```
array = [
{name: 'kenji', mail:'fafa@eee.com'},
{name: 'morita', mail: 'kkk@faf.com'}
]
```

答え

```js
array = [
{name: 'kenji', mail:'fafa@eee.com'},
{name: 'morita', mail: 'kkk@faf.com'}
];
var array2 = [];
array.forEach(function(Element, ind, array){
   for(var key in Element){
    if(key == 'mail'){

  array2.push(Element[key])
  }
 }
})
console.log(array2);
```

**問48**
配列```var passed = [12, 5, 8, 130, 44]```の要素全てが10以上かどうかを評価してtrueかfalseを返しなさい。また10以上のものが一つでもあった場合trueを返しなさい。

```js
function isBigEnough(ele, ind, arry){
 return (ele >= 10);
};
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
passed //false

```

**問49**
二次元配列
```
[['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']
];
```

の'two'の値を取得してください

```js
var fafa = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']
];
var map = new Map(fafa);
map.get('two');
//'send@fafa'

```

**問50**
問49の変数fafaにインデックス3番目の要素として['four',fafa@eee]の配列を追加しなさい

```js
var fafa = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']
];
var map = new Map(fafa);
map.set('four', 'fafa@eee');
```

**問51**
問50の変数fafaに内にある要素を全て取得しなさい

```js
var fafa = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']];
var entries = map.entries();
for (var entry of entries){
 console.log(entry);
}

```

**問52**
```'morita kenji'```をRegExpオブジェクトを使って配列['morita kenji']が返るようにしてください。(空白スペースにマッチする正規表現を使うこととする)

```js
//正解例
/\w+\s\w+/.exec('morita kenji')
```

**問53**
このようなstrとstr2がある ```var str = 'It is an important problem';``` ```var str2 = 'The import duty is not cheap';``` str,str2の正規表現を使い、```import```英単単語にマッチした際にそれぞれfalse,trueを返す記述をしくださいてださい

参照(正規表現書き方ドリル/技術評論社)

```js
var str = 'It is an important problem';
var str2 = 'The import duty is not cheap';
var ii = /.*\bimport\b.*/.test(str);//false
var ii = /.*\bimport\b.*/.test(str2);//true
```

**問54**
ひらがな全てにマッチ、半角カタカナ全てにマッチ、カタカナ全てにマッチする正規表現を記述しなさい

```js
//ひらがな
[ぁ-ん]
//カタカナ
[ァ-ヶ]
//半角カタカナ
/^[\uFF65-\uFF9F]+$/

//半角以外にmatch
//[
^A-Za-z0-9
]

```

**問55**
「」の中に「ヤッホー!」の文字列が1回以上続く場合にのみマッチする正規表現を書いてください。(！が英単語を構成する文字以外の場合はどうか、また「ヤッホー！」が2回以上3回以下にマッチにはどう書きますか)

```js
var str = '「ヤッホー！ヤッホー！」'; /「(ヤッホー！)+」/.exec(str); //['「ヤッホー！ヤッホー！」', 'ヤッホー！']

//メタ文字
var str = '「ヤッホー?ヤッホー@」';
/「(ヤッホー\W)+」/.exec(str);
['「ヤッホー?ヤッホー@」', 'ヤッホー@']
```



**問56**
```js
(ありがとう|こんにちは｜さようなら)
```
と
```js
ありがとう|こんにちは｜さようなら
```
の違いを教えてください。それぞれexecメソッドを使用した際の返り値を教えてください

```js
//文中に使えるかどうか
//
var str = '彼はありがとうと言った';
/彼は(ありがとう|こんにちは｜さようなら)と言った/.exec(str);
//['彼はありがとうと言った', 'ありがとう']

//
var str = '彼はありがとうと言った';
/彼はありがとう|こんにちは｜さようならと言った/.exec(str);
//['彼はありがとう']
```

**問57**
「When」、「Where」、「Who」、「What」、「Why」、「How」の単語のみにマッチする正規表現を書きなさい

```js
var str = 'How';
/Wh(en|ere|o|at|y|)|How/.exec(str);
```


**問58**
こちらが

```js
x = new Boolean(false)
```
if文の式として渡すと実行されるか答えなさい
[参照](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

```js
x = new Boolean(false);
if (x) {
 //実行される
}
//undefinedやnull以外のオブジェクトは実行されます

//真偽値オブジェクトは格納されている値がfalseであってもtrueと評価される。
var falseValue = new Boolean(false);
console.log(falseValue)//false,真偽値オブジェクトが出力される
if(falseValue){//真偽値オブジェクトの内容がfalseでもオブジェクト自体は常にtrue値をみなされる
  //run
}


//もし真偽値でない値を真偽値に変換したいのであればnew演算子を使用せずBoolean()に値を渡してください。Boolean()はプリミティブ値のtrueもしくはfalseを返します。以下は全てfalse

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));


//以下は全てtrue

console.log(Boolean(1789));
console.log(Boolean('false'));//'false'という文字列は真偽値プリミティブのfalseとは異なる

console.log(Boolean(Math);
console.log(Boolean(Array()));

//see: 開眼!Javascirpt(O'REILLY)
```

**問59**

```js
myFalse = new Boolean(false);
g = new Boolean(myFalse);
```

上記のコードはtrueかfalseか

答え

```js
myFalse = new Boolean(false);
g = new Boolean(myFalse);
g//true
//Boolean オブジェクトの初期値としてオブジェクトを指定した場合、それが値が false の Boolean オブジェクトであっても、新しい Boolean オブジェクトは true の値を持ちます
```

**問60**

```
undefined == null
```
の真偽値は何か

```js
if (undefined == null){
  //run
}
//実行されます
```

**問61**
関数iiを実行したら関数を受け取り、受け取った関数に引数'home'を渡し実行すると'my home'と返ってくるクロージャーを作ってください

```js
var ii = function(){
  var pp = 'my ';
  return function(value){
    console.log(pp + value);
  }
}
var kk = ii();
kk('home');
//my home
```

**問62**
今の時間、何時何分何秒を表しなさい

```js
var now = new Date();
var nowtime = '今' + now.getHours() + '時' +  now.getMinutes() + '分' + now.getSeconds() + '秒';
nowtime
//'今23時49分56秒'
```


**問63**
Object matching shorthandを使い、こちら

```js
function getSomething(){
  return {
    first: 1,
    second: 2,
    third: 3
  }
}
```
の関数を
first,second,thirdにそれぞれ代入してください

```js
function getSomething(){
  return {
    first: 1,
    second: 2,
    third: 3
  }
}
var { first, second, third } = getSomething();
first
//1
second
//2
third
//3
```

**問64**
Parameter destructuringとして

```js
function g({name: x}) {
  console.log(x);
}
g({name: 5});
```
こちらが5を出力するトランスパイルされたjsを記述してください

```js

function g(_ref) {
  var x = _ref.name;
  console.log(x);
}
g({ name: 5 });

```

**問65**

文字列```'fafafakenjifafafa'```に```'kenji'```が含まれているかどうかの真偽値を出力しなさい
expect //true

```js
console.log('fafaeeekenjifa'.includes('kenji'));
//true
```

**問66**

文字列'repeat'を2回繰り返した結果を出力しなさい

expect //'repeatrepeat'

```js
console.log('repeat'.repeat(2));
//'repeatrepeat'
```


## ECMAScript2015

**問67**

文字列
```
foo
```
をイテレーターを使った反復処理で配列
```
['f','o','o']
```
を出力しなさい。

```js
 //ECMAScript2015,Babel
var chars = [];
for (let n of 'foo'){
 chars.push(n);
}
console.log(chars);//['f','o','o']
```

**問68**

IteratableからIteratorを取得、要素を出力していきして「要素がもうない意」の```{value: undefined, done: true}```を出力しなさい

```js
var arr = ['ooo', 'eee'];

var Iterator = arr[Symbol.iterator]();
console.log(Iterator.next()); // { done: false, value: 'ooo'}
console.log(Iterator.next()); // { done: false, value: 'eee' }
console.log(Iterator.next()); //{ done: true, value: undefined }
```

**問69**

文字列'foo'を```['f','o','o']```と出力してください

```js
//スプレッドオペレータ
var arr = [...'foo'];
console.log(arr);
```

**問70**

文字列```morita```の1文字目```m```を変数```index0```に代入、2文字目```o```を```index1```に代入、残りを配列```rest```の各要素として出力してください

```js
//分割代入
var [index0, index1, ...rest] = 'morita';
console.log(index0,index1, rest);
//'m'
//'o'
//['r', 'i', 't', 'a']
```

**問71**

```foo(1, 2, 3, 4, 5, 6)```を実行したら1がfirst、2がsecond、残りが配列の要素になるような ```foo```を定義しなさい

```js
//レストパラメータ
function foo(first, second, ...rest){
 console.log('first', first);
 console.log('second', second);
 console.log('rest', rest);
}

foo(1,2,3,4,5,6);
```

**問72**

配列```arr = [1, 2, 3]```にArray#concatを使わずに```arr2 = [4, 5, 6]```を結合させ```[1, 2, 3, 4, 5, 6]```となるようにしてください

```js
//スプレッドオペレータ

var arr2 = [4, 5, 6];
var arr = [1, 2, 3, ...arr2];
console.log(arr);//[1, 2, 3, 4, 5, 6]
```

**問73**

下記のようなあるファイル(module.js)で記述した

```js
var foo = 'foo';
function bar(){};
class Baz{
  baz(){}
}
```
を別のファイル(import.js)にexport、個別のメンバとして読み込む記述を示しなさい。また「module」という別名で全てのメンバを取得する記述も示しなさい
※module.jsとimport.jsは同階層にあるものとする

```js
//読み込まれる側
var foo = 'foo';
function bar(){};
class Baz{
  baz(){}
}
export {foo, bar, Baz};

//読み込む側
//メンバ毎にインポート
import {foo, bar, Baz} from './module';
//console.log(foo);
//bar();
//new Baz();

//インポートする変数名の指定
import {foo as poo} from './module';
console.log(poo)

//モジュールまとめてインポート
import * as from './module';
//console.log(module.foo)

```

**問74**

```var obj = {foo: foo, bar: bar}```
オブジェクトのkeyとvalueが等しい場合の記述
をせよ


```js
var obj = {foo: foo, bar: bar};
var obj = {foo, bar};
```



### Computed property

**問75**

下のように
```
var key = 'foo';
var obj = {};
obj[key] = 0;
obj[key + '_bar'] = 1;
```
書いていた記述をECMAScript2015の記述で書いてください

```js
var key = 'foo';
//ECMAScript2015
var obj = {
  [key] : 0,
  [key + '_bar'] : 1
}

//common
console.log(obj.foo, obj.foo_bar);
//0, 1

```

**問76**

下記
```js
function ff(){
  return 'kenji';
}
```
のような関数をconsole.log内からテンプレートリテラルを使って出力してください

期待する出力 my name is kenji
[参照](https://gist.github.com/kuu/b7eb679a3ad48d980ed3)

```js
function ff(){
  return 'kenji';
}
console.log(`my name is ${ff()}`);
//my name is kenji
```

### Destructuring assignment

**問77**

変数a,bにそれぞれ1,2を代入してください

```
let [a, b] = [1, 2];
```

**問78**

文字列 ```line1```と```line2```を改行てconsole.log出力しなさい

```js
console.log(`line1
line2
`);
```

### Tagged template strings

**問79**

```js
var long = '30px';
var weight = '40px';

function tag(strings, ...values){
  //console.log(strings);['身長','で、体重は','です']
  return `m:${values[0]}、p:${values[1]}`; };

var str1 = tag`身長${long}で、体重は${weight}です`; console.log(str1);
```


**問80**

ユーザー定義関数funを作り、実行時の引数として、オブジェクトkeyにa,b。値をそれぞれ1,4として加算して返してください

```js
function fun({a, b}){
  return a + b;
}
fun({a: 1, b: 4});//5
```

**問81**

```var aa = [['morita', 'kenji', 'keiko'],['morita', 'kenji', 'keiko']```

全てのaaにある多次元配列の全ての要素に文字列'san'を付け加えて一つの配列として出力してください

```js

```

**問82**

mapとforEachの違いは何か答えてください

```js
//The main difference between the two methods is conceptual and stylistic: You use forEach when you want to do something to or with each element of an array (doing 'with' is what the post you cite meant by 'side-effects', I think), whereas you use map when you want to copy and transform each element of an array (without changing the original).

//ref
http://stackoverflow.com/questions/3034392/what-use-does-the-javascript-foreach-method-have-that-map-cant-do

//map
//新しいarrayを返す

var a = [{ val: 1 }, { val: 2 }, { val: 3 }];
var uu = a.map(function(el) {
    el.val++;
    return el.val
});
a//[{ val: 2 }, { val: 3 }, { val: 4 }]
uu//[2, 3, 4]

//forEach
var a = [{ val: 1 }, { val: 2 }, { val: 3 }];
a.forEach(function(el) {
    el.val++;
    console.log(el.val);
});
//2
//3
//4

//実行するだけ
//forEachならこんなことも

//forEachが配列の要素を編集して配列で返すには
//
var a = [1,2,3],
    b = [];
a.forEach(function(el) {
    b.push(el+1);
});

// b is now [2,3,4], a is unchanged [1, 2, 3]

var a = [1, 2, 3];
var b = a.map(function(elem){
  return  elem + 1;
});
b// [2, 3, 4]
a// [1, 2, 3]


//メソッドを実行
cats.forEach(function(cat) {
    cat.meow(); // nicer than cats[x].meow()
});


var oo = [2,3,4,5,6];
var aa = oo.map(function(x){
    return x + 1;
});
aa //[3, 4, 5, 6, 7]

//forEach
それぞれの配列の要素に対して何かしたいとき
var oo = [2,3,4,5,6];
var aa = oo.forEach(function(x){
    return x + 1;
});
aa// undefined

//forEachは元の配列を変更できる

//map
元の配列を変更せず変換やcopyをしたいとき
```

## 配列

**問83**

```[{name: 'kenji'},{name: 'morita'}]```の要素のvalueを次のように書き出しなさい(文字列'san'を付けています)e.g``` ['kenjisan', 'moritasan']```


```js
var aa = [{name: 'kenji'},{name: 'morita'}];
var result = aa.map(function(ele, i){
   return ele.name + 'san';
});
result//['kenjisan', 'moritasan']

```

**問84**

問83と同じ事をforEachでしてください

```js
var aa = [{name: 'kenji'},{name: 'morita'}];
var arry = [];
aa.forEach(function(ele, i){
      for (var key in ele){
           arry.push(ele[key] + 'san')
      }
});
arry//['kenjisan', 'moritasan']
```

## Objects

**問85**

```js
const atom = {
  value: 1,
  addValue: function (value) {
    return atom.value + value;
  },
};
```

上記object-shorthandを使って書き換えてください

```js
//ok
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};
```

**問86**

こちらのobjをkey内でメソッド呼び出しされているのをコンピューティッドプロパティを使って書き換えてください

```js
function getKey(k) {
  return `a key named ${k}`;
}

const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

//ok
function getKey(k) {
  return `a key named ${k}`;
}
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

**問87**

下記のようなURLのファイルパスごとに配列に格納してください

```js
var filepath = location.pathname.substring(1).split('/');
filepath;

//['kenmori', 'Angular2_TypeScript', 'tree', 'master', 'angular2-quickstart']
//https://github.com/kenmori/Angular2_TypeScript/tree/master/angular2-quickstart```

```

**問88**

下記のようなobj内のkeyと値が一緒の際できるshorthandで記述してください

```js
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

//ok
const obj = {
  lukeSkywalker,
};

```


## spread Array

**問89**

下記のようなある配列itemsの要素をコピーしている記述をspreadArrayを使って簡潔に記述してください

```js
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}
const itemCopy = [...items];
```

**問90**

windowオブジェクトを7つ答えてください

```
navigator
location
history
screen
frames
document
parent, top, self
```

### Destructuring

**問90**

下のようにuserというnameとidをプロパティで持ったオブジェクトを再割り当てやマルチプルなobjectを扱う際に簡潔な書き方にしてください

```js
function add (user){
  const name = user.name;
  const id = user.id;
  return `${name} ${id}`;
}

```
答え

```js
//ベター
function add (user) {
  const { name, id } = user;
  return `${name} ${id}`;
}
//best
function add ({name, id}){
  return `${name} ${id}`;
}
```

**問91**

```var aaa = [['oo','oo1'], ['ll','ll2']];```このような多次元配列のインデックス0番目だけを出力しなさい

```js
var aaa = [['oo','oo1'], ['ll','ll2']];
aaa.forEach(function(ee){
  ee.filter(function(eee, i){
  if(i == 0){
      console.log(eee);
    }
  });
});
//oo ll
```

**問92**

Array destructuringとして簡潔に記述しなさい。
シャローコピーとディープコピーの違いを教えてください。また
```var aa = ['oo', 'll'];```
aaをbbにシャローコピーしてbb[0]に任意の文字列を代入し、aa[0]の参照する値が変わらないことを確認してください


```js
//concat
var aa = ['oo', 'll'];
var arry = [];
var bb = arry.concat(aa);//shallow copy
bb[0] = 'kk';
aa//['oo', 'll']
bb//['kk', 'll']

//slice
var aa = ['oo', 'll'];
var bb = aa.slice(0, aa.length);
bb[0] = 'kk';
aa//['oo', 'll']
bb//['kk', 'll']

//bad
//spliceは破壊的メソッド(元参照を変える)
var aa = ['oo', 'll'];
var bb = aa.splice(0, aa.length);
bb//['oo', 'll']
aa//[]
```

**問93**

```var aa = ['oo', 'll'];```をbbにコピーしてaaは['kk', 'jj'];が挿入されるようにしなさい。期待する結果

bb//['oo', 'll'];
aa//['kk', 'jj'];

```js
var aa = ['oo', 'll'];
var bb = aa.splice(0, aa.length, ['kk','jj'])
bb//['oo', 'll'];
aa//['kk', 'jj'];
```

**問94**

このような配列
```var aa = ['ii', 'jj', 'kk'];```がある。'jj'要素を削除するために
deleteを使った場合とspliceを使った場合の違いは何か。それがわかるコードを書いてください

```js
deleteは削除されたインデックスを残す。spliseは間を詰める。
var aa = ['ii', 'jj', 'kk'];
delete aa[1];
aa//['ii', undefined, 'kk']
var aa = ['ii', 'jj', 'kk'];
aa.splice(1,1);
aa//['ii', 'kk']
```

**問95**

```var text = 'key and value';```このような文字列を単語毎に配列の要素として格納してください
//期待する結果
//['key','and','value']

```js
var text = 'key and value';
var arraytext = ii.match(/\w+/g);
arraytext
['text', 'and', 'value']
```

**問96**

```var text = 'abc def ghi jkl';```の空白の直前の文字をグループ化してカンマ文字の後ろに移動させなさい。

期待する文字列
'ab,cde,fgh,ijkl'

```js
var text = 'abc def ghi jkl';
text.replace(/(.)\s/g,',$1');
'ab,cde,fgh,ijkl'

//or

var text = 'abc def ghi jkl';
text.replace(/(.)\s/g,function(m0, m1){
   return ',' + m1
});
'ab,cde,fgh,ijkl'
```


**問97**

``` var array = ['aa','bb','cc','dd','ff'];```
このような配列の要素'bb'の前に'ff'を移動させて ``` ['aa','ff','bb','cc','dd'] ```このような配列を完成させてください

```js
array.splice(1,0,array.splice(4,1)[0])
//array
//['aa','ff','bb','cc','dd']

```

**問98**

nullの比較についてそれぞれtureかfalseか答えてください

```js
null < 1
null > 1
null < -1
null > -1

null < 0
null <= 0
null >= 0
null > 0
null == 0
null === 0

//Anser
null < 1 //ture
null > 1 //false
null < -1 //false
null > -1 //true
//数値コンテキストではnullは0と解釈されるため、1より小さく、-1より大きい。
null < 0 //false
null <= 0 //true
null >= 0 //true
null > 0 //false
null == 0 //false
null === 0 //false
//0以下であるが0より小さくはない。
//0以上であっても0より大きくはない。
```

**問99**

こちらの2つのif分の条件式の違いを教えてください

```js
if('a' in obj)
if(obj.a)


**in演算子の場合**
objにキーaが存在する場合(undefinedでも)trueを返す
if('a' in obj)は実行される

**obj.aの場合**
undefinedの場合falseを返す
if(obj.a)が存在しても未定義だと実行されない
```

**問100**

``` var arr = [ 10, 20 ]; ```においてarr[2]が存在しないことを確認してください

```js
2 in arry;
```

### 文字列

**問101**

```var string = '-9';```を数値に変換してください

```js
string - 0
//-9

//別解
//+string
//-9
```
**問102**

sliceとsubstringの違いを教えてください

```js
//引数に-を与えた際に違いが出ます

var str = 'あいうえお';
str.length
str.slice(0,-2)
//'あいう'
//0からインデックス最後の文字を-1とし後ろから数える

var str = 'あいうえお';
str.substring(0, -2);
//'
//負の数字は0とみなす。
//0から0を取得するので空文字を返す

//sliceは開始位置が終了位置以上だと空文字を返す

var str = 'あいうえお';
str.slice(1,1)
//'

//「い」を取得したい場合
var str = 'あいうえお';
str.slice(1,2)
'い'

//substringの場合
//開始位置が終了位置より大きいと交換されて解釈される

var str = 'あいうえお';
str.substring(1,-3);
//substring(-3,1)と解釈され負の数は0と見なされ
//substring(0,1)と同等の処理をする

//'あ'
```

**問103**

次のような文字列```abcdefg```のcとeそれぞれを大文字にしてください

```js
var str = 'abcdefg';
var replaced = str.replace(/[ce]/g,function(str){
 return str.toUpperCase();
});
//replaced 'abCdEfg'
```

**問104**

次のような文字列をvar str = 'こんにちは';
var name = 'もりたさん';
連結し'いい天気ですね'を付け足した新しい文字列を生成してください

期待する結果```'こんにちはもりたさんいい天気ですね'```

連結してもstrは元の文字列のママなことを確認
str
//こんにちは

```js
var str = 'こんにちは';
var name = 'もりたさん';
var newstr = str.concat(name, 'いい天気ですね');
newstr
'こんにちはもりたさんいい天気ですね'

str //こんにちは

//String.concatのパフォーマンスについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/concat
```

**問105**

引数targetがnullかundefinedのときのみの判定がtrueになる条件式を書いてください

```js
target == null
```

**問106**

こちら
```js
var value = 0;
var target  = value || 10
target
//10
```
はvalueが0の時falseになり10が返る。0の際も代入されるようにしてください

```js
var value = 0;
var target = (value !== undefined) ? value : 10;
value
//0
```

**問107**

配列arrayが空ならfalseが返るようにしてください

```js
var array = [];
array.length !== 0
//false
```

**問108**

この
```js
var obj = {};
obj ? true : false;
```
の場合falseが返るようにしてください

```js
var obj = {};
Object.keys(obj).length != 0 ? true : false;
//false
```

**問109**

forでループさせるのとforEachで処理する際の違いを教えてください

```js
//forは構文
//returnで返り値を返し、その関数処理を終える

//forEachはメソッド。受け取った関数を全ての要素に処理するまで終えない。returnしても次の要素に処理が移るのみ

//配列のどれか一つが条件を満たす評価をしたい場合Array.someがある
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
// passed は false
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed は true
```

**問110**

この``` const arry = ['a','b','c']; ``` の列挙可能なプロパティと不可能なプロパティを出力してください

期待する結果
``` ['0','1','2','length'] ```

答え

```js
const arr = ['a','b','c'];
console.log(Object.getOwnPropertyNames(arr));
//['0','1','2','length']
```

**問111**

オブジェクトoに対してaという値が'morita'、列挙可能、削除可能、書き換え可能なプロパティを作成してください


```js
let o = {};
Object.definedProperty(o,'a',{
  value: 'morita',
  writable: true,
  configurable: true,
  enumerable: true,
});
```

**問112**

下のlib/math.jsに入っている1と2を別のファイルで使えるようにして
受け取る方app.jsも記述しなさい

```js
//lib/math.js
//1
function sum(x, y) {
  return x + y;
}
//2
var pi = 3.141593;
```


```js
//lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;

//app.js
import * as math from 'lib/math';
import {sum, pi} from 'lib/math';
//e.g.
math.sum(x, y){
    console.log(math.pi);
    return x + y;
}
sum(1, 3)
```


## 配列

**問113**

```['morita','kenji','fafafa']```の要素 ```'fafafa'```のインデックスを返してください。
期待する値 2

```js
['morita','kenji','fafafa'].findIndex(x => x == 'fafafa')
//2
```

**問114**

配列```['A','B','C']```を配列の0番目のインデックス値になるようにしてください
expect [['A'],['B'],['C']]


```js
//better
['A','B','C'].map(x => Array.of(x));

//best
['A','B','C'].map(x => [x])

//http://www.2ality.com/2014/05/es6-array-methods.html
```

**問115**

配列```['a', 'b', 'c']```のインデックス1番だけを文字列'kenji'に変えてください


```js
['a', 'b', 'c'].fill('kenji', 1, 2);
//['a','kenji','c']

//http://www.2ality.com/2014/05/es6-array-methods.html
```

**問116**

配列``` [6, -5, 8]```を0未満の要素だけ出力しなさい

```js
const i = [3, 0, 6, -1].find(x=> x < 0);
console.log(i)
//-1
```
**問117**

gen.next().valueを実行すると値が1づつ返ってくるようなGenerator関数を作り、1,2,3と出力しなさい

```js
function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

**問118**

ラッパーオブジェクトとは何ですか？教えてください。
//解答は理解していてある程度どういうものか答えられればいいものとします

```js
//回答例

//trueなどのプリミティブ値のプロパティにアクセスするとjavascirptはプリミティブ値に対応するコンストラクタからラッパーオブジェクトを作り、そのラッパーオブジェクトのプロパティやメソッドにアクセスできるようになる。(「オブジェクトのように」あつかうことができる。)作られたラッパーオブジェクトはオブジェクトへのアクセスが終わると破棄されて元のプリミティブ値に戻します。
例えば下記は文字列オブジェクトから文字列を生成しています。
var string = new String('foo');
string.length;//3 オブジェクトがもつプロパティにアクセスできます。
var string = 'foo'//プリミティブ値として代入
string.length //3 文字列プリミティブをオブジェクトとしてアクセス。同じ3を出力していますが内部的に一時的にラッパーオブジェクトを呼び、オブジェクトにアクセス。その後破棄しています

よく「javascriptは全てがObjectである」と言われるのはこのため

//プリミティブ値・・・文字列,数値,真偽値などtypeofの評価でObjectを返さないそれら

```

**問119**

nullとundefinedの違いを教えてください

```js
//nullはプロパティは設定しているものの、値の初期値としてなんらかの理由で値が入っていないことを明示する際にnullを入れる。変数やプロパティにがその時点で利用不可能にするためにnullを明示的に入れる

//undefinedは存在自体がない
```

**問120**

変数fafaの値がnullかどうかを確認してください

```js
var fafa = null;
console.log(typeof fafa)//Object
console.log(fafa == undefined)//等値演算子ではtrueになってしまう
console.log(fafa === null);//true //同値演算子を使う

//等値演算子ではnullとundefinedはtrueになってしまうことに注意してください。
```

**問121**

プリミティブ型と参照型の同値比較の違いを教えてください。

```js
//プリミティブ型の同値比較は文字通り同じ値かどうかが評価される。

//参照型同士の同値比較は同じオブジェクトを参照しているかどうかが評価される。オブジェクトの代入は参照先の代入であることが理解できればok(参照渡し)

```

## DOM操作

**問122**

div要素を10個作ってidがparentの子要素として追加してください

```js
//bad
var parent = document.getElementById('parent');
for(var i = 0; i < 10; i++){
  var child = document.createElement('div');
  parent.appendChild(child);;
}

//good
var fragment = document.createDocumentFragment();
for(var i = 0; i < 10; i++){
  var child = document.createElement('div');
  fragment.appendChild(child);
}

document.getElementById('parent').appendChild(fragment);
```

**問123**

XHTMLにscriptタグで記述する際のCDATAタグをどのように書くか教えてください。またもしそれを書かない場合の実体参照、
``` > ``` と ``` < ``` をどのように書くか教えてください。また、&と'、'はそれぞれエスケープ文字でどのように書きますか？

```js
//CDATAタグ
<script>
<![CDATA[
  //something...
    ]]>
</script>

//タグ<h2>の書き方
&lt;h2&gt;

//「'」シングルクウォート
&quot;

//「＆」アンパサンド
&amp;
```

**問124 WIP**

実体参照に直すscriptを書いてください

```js
//参照
//http://stackoverflow.com/questions/17966089/how-to-replace-and-with-lt-and-gt-with-jquery-or-js
```

## 正規表現


**問125**

次の文章中の
```
 My name is Taro Suzuki and I am a researcher at ABC.
```
小文字のaで始まる英単語にのみマッチする正規表現を書いてください。1文字の場合もマッチの対象で


```js
const str7 = 'My name is Taro Suzuki and I am a researcher at ABC.';

 //str.match(/\ba.*\b/); これだと大文字と次の単語にmatchしてしまう
console.log(str7.match(/\ba\w*\b/g));
//['and','am','a','at']

//\sa\w*\sだと\sは文字の先頭や末尾にはマッチしないので、文章の先頭や末尾にある英単語が対象から外れてしまうことに注意してください。
```

**問126**

```<p>```や```<img src="fafafa">```などタグにマッチする正規表現を作ってください。またタグ名だけを抜き取ったものも教えてください。

期待する値
```"<img class='fafafa'>"```
※</ではじまる閉じタグは除外

タグ名のみ
``` p ``` や ``` img``` ※いろいろあると思うので答えは一例とさせていただきます

```js
const str3 = '<img src="fafa.com">'
const str4 = '<p>'
const reg2 = /<(\S+)(\s+.+)?>/;//キャプチャあり
const reg3 = /<(?:\S+)(?:\s+.+)?>/;//キャプチャさせない
const re2 = str3.match(reg2);
const re3 = str3.match(reg3);
const re4 = str4.match(reg2);
console.log(re2);
//['<img src="fafa.com">','img','src="fafa.com"']
console.log(re2[0]);
//<img src="fafa.com">
console.log(re3);
//['<img src="fafa.com">']

console.log(re3[0]);
//<img src="fafa.com">
console.log(re4);
//['<p>','p',null]
console.log(re4[0]);
//<p>
```

**問127**

下のこちらを使い

``` var myRe=/ken*/g; var str2 = 'fafakenfafkenji'; ```

文字列の中のkenだけをexecメソッドを使いマッチした文字を全て出力、マッチした文字列の後のインデックスを同時に出力してください

```js
const myRe=/ken*/g;
const str2 = 'fafakenfafkenji';
let array;
while ((array = myRe.exec(str2)) !== null) {
 let msg = array[0] + ' を見つけました。';
  msg += '次のマッチは ' + myRe.lastIndex + ' からです。';
  console.log(msg);
}
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
```

**問128**

次の``` const string3 = 'washable reasonable accessible assemble answerable'; ```

こちらの文字列,
「able」で終わる英単語の前の部分([able]を除いた部分)にマッチする正規表現を書きなさい。期待する結果

```
['wash','reason','answer']
```

```js
const string3 = 'washable reasonable accessible assemble answerable';
const reg5 = /\b\w+(?=able\b)/g;
console.log(string3.match(reg5));
//['wash','reason','answer']
```

**問129**

こちらの文字列
```
const nen1 = 'ケンジは昭和55年生まれの35歳であり、ケンジの母は昭和22年生まれの64歳である'
```
を使い、後ろに「年」および数字以外の文字が続く1桁以上の数字にマッチする正規表現を書いてください

期待する結果
```
['35','64']
```

```js
const nen1 = 'ケンジは昭和55年生まれの35歳であり、ケンジの母は昭和22年生まれの64歳である'
const reg6 = /\d+(?![年\d])/g;
console.log(nen1.match(reg6));
//['35','64']
//see:正規表現書き方ドリル(技術評論社)

//※ 一番最初に見つけたマッチだけが欲しい場合、execの方がいいかもしれません
//see: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match
```

**問130**

下のような文字列```const str222 = 'わたしの名前は「もりた」です。あだなは「もりけん」です';```
のカギ括弧内とその文字列にマッチするような正規表現を書いてください


['「もりた」','「もりけん」']

```js
const str = 'わたしの名前は「もりた」です。あだなは「もりけん」です';

const re = /「(.+?)」/ig;
const result = str.match(re);
console.log(result);
//['「もりた」','「もりけん」']

```

**問131**

上記の文字列を使ってexecメソッドを使い文字列とし2つとも出力してください

期待する結果
//「もりた」「もりけん」


```js
const str222 = 'わたしの名前は「もりた」です。あだなは「もりけん」です';
const re222 = /「(.+?)」/ig;
let result;
while ((result = re222.exec(str222)) !== null){
  console.log(result[0],'ここ')
}

```

**問132**

下記の文字列の「客」という文字の部分ともうひとつある同じ文字である場合のみマッチする正規表現を作成してください
```
○あの客はよく柿食う客だ
×あの客はよく柿食う人だ
○あの友達はよく柿食う友達だ
×あの親友はよく柿食う友達だ
```

```js
//解答例
const str5 = 'あの客はよく柿食う客だ';
const res5 =str5.match(/あの(.+)はよく柿食う\1だ/);
console.log(res5[0]);
//あの客はよく柿食う客だ

//※[0]にはマッチした箇所が、この場合[1]にはキャプチャが入る
```

```js
const str5 = 'あの客はよく柿食う客だ';
const res5 =str5.match(/あの(.+)はよく柿食う\1だ/);
console.log(res5[0]);
```

**問133**

次のタグ

```js
const tag = '<div>
    <h1>kenjimorita.jp</h1>
</div>';
//<1><2>kenjimorita.jp</3></4>
```

の1と4、2と3が同じ場合にtrue、違う場合はfalseを返す正規表現を書いてそれぞれ出力し確認してください

```js

const tag = '<div><h1>kenjimorita.jp</h1></div>';
console.log(/<(\w+)><(\w+)>kenjimorita.jp<\/\2><\/\1>/.test(tag))
//true

const tag2 = '<div><h1>kenjimorita.jp</a1></div>';
console.log(/<(\w+)><(\w+)>kenjimorita.jp<\/\2><\/\1>/.test(tag2))
//false
```


**問134**

```
[2, 3,-1, -6, 0, -108, 42, 10].sort();
```
こちらのsortは正しくsortされない。コンパレータ関数を渡して正しい順序として出力してください。

```js

[2, 3,-1, -6, 0, -108, 42, 10].sort(function(x, y){
if(x < y) return -1;
if(y < x) return 1;
return 0;
});
//[-108, -6, -1, 0, 2, 3, 10, 42]

```


**問135**

```js
var i = document.getElementById();
i.parentNode.tagName

nodeType[1] = ElementNode;
nodeType[2] = AttributeNode;
nodeType[3] = TextNode;
i.childNodes; //子要素を返す
i.firstChild //最初の子要素
```

**問136**

```html
<div id='top' align='center'>
  <div id='nested'>
    <div><p><a></a></p></div>
  </div>
</div>
```
上のようなnodeがある。```#nested```
要素を削除してください

```js
var i = document.getElementById('top');
var f = document.getElementById('nested');
i.removeChild(f);
```

**問137**

nestedの親要素が不明の場合の時nestedを削除してください

https://developer.mozilla.org/ja/docs/Web/API/Node/removeChild

```js
var node = document.getElementById('nested');

if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

**問138**

topの子要素全て削除してください

```js
 var element = document.getElementById('top');

 while (element.firstChild) {
   element.removeChild(element.firstChild);
 }
```

**問139**

下のfooオブジェクトが自身のプロパティとしてbarを持っていないことを示してください

```js
// Object.prototype汚染
Object.prototype.bar = 1;
var foo = {goo: undefined};

foo.bar; // 1
'bar' in foo; // true
```

答え
```js
foo.hasOwnProperty('bar'); // false
foo.hasOwnProperty('goo'); // true
```

**問140**

こちらのfor inループでも汚染された継承されたプロパティも
列挙される

```js
// Object.prototype汚染
Object.prototype.bar = 1;

var foo = {moo: 2};
for(var i in foo) {
console.log(i); // barとmooが両方とも表示される
}

//good
// 継承されているfoo
for(var i in foo) {
    if (foo.hasOwnProperty(i)) {
        console.log(i);
    }
}
```

**問141**

new Mapとnew WeakMapの違いを教えていください

```js
//http://uhyohyo.net/javascript/16_1.html
weakMapは参照元を内部で保持していても他のところに全く関係ない、上書きされるとガーベージコレクションの対象になる
Mapは内部で参照元を保持し自分自身で「含まれるオブジェクト一覧」を扱うメソッドがある為にガーベージコレクションの対象にならない
//weakMapのいいところkeyに対してのobjを汚さないで済む
```

**問142**

[0,0,0]の配列をインデックス1と2を7にした配列にしてください
expect : [0, 7, 7]

```js
var ary = [0,0,0];
ary.fill(7,1)
//[0, 7, 7]
```

**問143**

このような
```css
<style>
h3:after {
  content:'';
}
</style>
```
スタイル定義されている
h3:after(擬似要素)のcontentプロパティにアクセスしてください

```js
var h3 = document.querySelector('h3');
var result = getComputedStyle(h3, ':after').content;
```

**問144**

少なくとも400pxあるビューポートに対してスタイルを制御したい際のif文を書いてください

```js
if(window.matchMedia('(min-width:400)').matches){
/* 少なくとも400ピクセル幅のあるビューポート */
}else {
/* 400ピクセル幅に満たないビューポート       */
}
```

**問145**

こちらの```var numObj = 12345.6789;```
を小数点以下を丸めてください

期待する結果
//12346

```js
var numObj = 12345.6789;
numObj.toFixed();
//12346
```

**問146**

こちらの
```js
var thing = 'global';
function foo(){
  console.log(thing);
  if(true){
    var thing = 'local';
    console.log(thing);
  }
}
foo();
```
のconsole.logはそれぞれ何を出力するか答えなさい。またそうなる理由を説明してください

```js
var thing = 'global';
function foo(){
  console.log(thing);
  if(true){
    var thing = 'local';
    console.log(thing);
  }
}
foo();
//undefined
//local

//この記述をすると関数内宣言内での変数宣言は巻き上げられてjavascriptは下のように解釈をするから
var thing = 'global';
function foo(){
  var thing;//巻き上げ
  console.log(thing);
  if(true){
    thing = 'local';
    console.log(thing);
  }
}
foo();
```

**問147**

先程のfoo()を実行した際に期待する値が出力されるようにしてください

```js
const thing = 'global';
function foo(){
  console.log(thing);
  if(true){
    const thing = 'local';
    console.log(thing);
  }
}
foo();
//block scope。変数スコープがブレース{}の中に閉じる
```

**問148**

div要素をnodeListとして取得し、Arrayのメソッドで「配列の様なオブジェクト」から配列に変換してください

```js
var likeArray = document.querySelector('div');
var turnArrayFun = function(obj){
    return [].map.call(obj, function(obj){
          return obj;
    })
}
turnArrayFun(likeArray);
```

**問149**

下記のようなDOMがある
```html
<div id="target">
  (1)
  <span>既存の内容</span>
</div>
```
この「既存の内容」より前(1)に```<p>子要素</p>```を挿入してください。但しdocument.writeやinnerHTMLは使わないものとする。

```js
var target = document.querySelector('div#target');
var html = '<p>子要素</p>';
target.insertAdjacentHTML('afterbegin',html);

//https://developer.mozilla.org/ja/docs/Web/API/Element/insertAdjacentHTML

```

**問150**
こちら

```html
(1)
<div id="target">
  <span>既存の内容</span>
  (2)
</div>
(3)
```
上記問題と同じDOM構造でそれぞれtargetより前に挿入(1)、「既存の内容より弟」位置に挿入(2)、targetより後に挿入(3)する記述をしてください

```js
var target = document.querySelector('div#target');
var html = '<p>子要素</p>';
var position =
beforebegin//(1)
beforeend//(2)
afterend //(3)
target.insertAdjacentHTML(position,html);
```

**問151**

下記

```js
const key = 'greeting';
var objA = {};
objA[key] = 'おはよう';
objA.greeting
//'おはよう'
```

をECMAScript2015を意識した省略記述してください

```js
const key = 'greeting';
var objA = {
  [key] : 'おはよう'
};
objA.greeting
```

**問152**

こちらの記述
```js
var objA = {
 add: function(a,b){
  return a + b;
 }
}
objA.add(2,5);
//7
```

を省略記述してください

```js
var objA = {
 add(a,b){
  return a + b;
 }
}
objA.add(2,5);
//7

```

**問153**

上記の問題のadd関数をobjA内でアロー関数で記述してください

```js
var objA = {
 add: (a,b)=>{
  return a + b;
 }
}
objA.add(2,5);
//7
```

**問154**

このような

```js
var array = ['shibuya','shinjuku','ebisu','shinagawa','tokyo','ueno','ikebukuro'];
```

配列がある。
変数aに'shinjuku'、bに'ikebukuro'が代入されるように簡潔に記述してください


```js
var array = ['shibuya','shinjuku','ebisu','shinagawa','tokyo','ueno','ikebukuro'];
var [,a,,,,, b] = array;
a
//"shinjuku"
b
//"ikebukuro"
```

**問155**

このような

```js
var obj = {
 name : 'kenji',
 twon: 'shibuya'
}
```
objを変数name、twonに代入して出力してください

```js
var obj = {
 name : 'kenji',
 twon: 'shibuya'
}
var {name, twon} = obj;
obj.name
"kenji"
obj.twon
"shibuya"
```

**問156**

var name = 'KenjiMorita';
のKとMだけをそれぞれ変数a,ｂに入れてください

```js
var name = 'KenjiMorita';
var [a,,,,,b] = name;

```

**問157**

変数
```js
var a = 1;
var b = 'goodby';
```
のaを'goodby'、bを
1として出力されるようにしてください(変数のSwap)

```js
var a = 1
var b = 'goodby'
b = [a, a = b][0];
a
//'goodby'
b
//1

```

**問158**

上記と同じ事をECMAScript2015ライクに簡潔に記述してください

```js
var a = 1;
var b = 'goodby';
[a,b] = [b, a]
["goodby", 1]

//http://qiita.com/gaogao_9/items/18b20ad9b76c9c81b5fa#_reference-4b73dec38a62a3fb0ab7
```

**問159**

こちら```const input = [0,[1,2,3],4,5,[6]];```を```[0,1,2,3,4,5,6]```となるようにしてください

```js
 //展開演算子(スプレッド演算子)
const input = [0,[1,2,3],4,5,[6]];
const inputB = [input[0],...input[1],input[2],input[3],...input[4]];
inputB
//[0,1,2,3,4,5,6]
```

**問160**

下記のような

```html
<div id='outer'>
  outer
  <div id='inner'>inner</div>
</div>
```

に対してload時に#innerのtextを任意の文字列に変えるようにしください。なおwindow.onloadは使わないようにする。

```js
document.addEventListener('DOMContentload',function(){
 var target = document.getElementById('inner');
 target.textContent('fafa');
},false)

//’load'はHTMLの全てのloadが終わったタイミングで発火。
//'DOMContentload'はDOM解析が終わってDOMに触れるようになったら発火。
//この場合'DOMContentload'を使用。画像が読み込まれる前に実行されて高速。だが画像幅に対してのレイアウト変更をするようであれば'load'
//[参照](http://qiita.com/gaogao_9/items/ec2b867d6941173fd0b1#_reference-1aa15cfa5c1cf1f77a86)
```

**問161**
このような

```js
addeventListener('DOMcontentLoad',function(){something},[true,false])
```
イベントリスナーの第三引数のフラグは何か説明してください

```html
useCapture設定。
例えばclickイベントを親と子、両方に設定している場合、親にtrue設定すると子供(内側)をclickすると親が先に発火(キャプチャフェーズ)、続い///て子供となる。useCaptureによって発生するイベントの順番が変わる。
defalutはfalse

**イベントフェーズ**

[キャプチャフェーズ](ルート要素から発生要素を探しに行く)
[ターゲットフェーズ](発生用をを検出する)
バグリングフェーズ(ルート要素を辿っていく)
see //http://qiita.com/hosomichi/items/49500fea5fdf43f59c58
```

**問162**
このような

```html
<div class="classA">
    <div>some1</div>
    <p><div>some2</div></p>
    <div>some3</div>
</div>
```
DOMがある。classAより子供のdiv要素のみ取得してください

```js
var classA = document.getElementsByClassName('classA');
var result = Array.prototype.filter.call(classA,function(classA){
 return classA.nodeName === 'DIV'
});
result instanceof Array
```

**問163**
このような

```html
<div class="fafa"><span></span></div>
<div class="fafa"><span></span></div>
<div class="fafa"><span></span></div>
<div class="fafa"><span></span></div>
```
for文でNodeListを使うのを避けるため、
DOMのspanタグの分だけ取得してNodeListをArrayに変えてください。


```js
var tag = document.getElementsByTagName('span');
var array = Array.prototype.slice.call(tag);
console.log(array instanceof Array );
```

**問164**

このようなODMがある
```html
<div id="main">
  <p class="content">
    <a class="link" href="http://kenjimorita.jp">
    1st Link
  </a>
    <p class="dummy"></p>
    <p class="content">
      <a href="http://example.com/">2link</a>
    </p>
    <p class="content">
      <a href="http://example.com/">3link</a>
    </p>
    <a href="http://example.com/">5th</a>
</div>
```

XPathを使ってidがmainのdiv、classにcontentを含むp要素の3番目hrefがhttp://example.comから始まるa要素を辿り
「3link」を出力してください

```js
var result = document.evaluate(
  '//div[@id="main"]/p[contains(@class,"content")][3]/a[starts-with(@href,"http://example.com")]',
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
);

console.log(result.snapshotLength); //1
var elem = result.snapshotItem(0);
console.log(elem.innerHTML);

//evalute([path:string],[Node],[null],[XPathResultObject:Type],[null])
//第3(名前空間URLを返す関数)、5引数(既存のXPathResultオブジェクト)はnullで問題ない。

//evaluteメソッド第４引数の値と返値の関係
ANY_TYPE :0
NUMBER_TYPE :1
STRING_TYPE :2
BOOLEAN_TYPE :3
UNORDERED_NODE_ITERATOR_TYPE :4
ORDERED_NODE_ITEERATOR_TYPE :5
UNORDERED_NODE_SNAPTHOT_TYPE :6
ORDERED_NODE_SNAPSHOT_TYPE :7
ANY_UNORDERED_NODE_TYPE :8
FIRST_ORDERED_NODE_TYPe :9

参照//パーフェクトJavaScript
```


**問165**

こちら
```html
<div id="target" class="foo-after" onClick="toggleStyle()">
  click here!
</div>
```
clickをしたらclass名がfoo-beforeに変わるtoggleStyleを実装をしてください

```js
var target = document.getElementById('target');
target.onclick = function toggleStyle() {
  this.classList.toggle('foo-after');
  this.classList.toggle('foo-before');
}
```


**問166**
 " fafa fafa eee "のような最初と最後に空白があるような文字列に対して、それらを含めない配列を返してください

```js
 " fafa fafa eee ".trim().split(" ");
 //["fafa", "fafa", "eee"]
```

**問167**
"abcdefg"のような文字列をインデックスと値が取れるオブジェクトに変更してください
期待する結果。
{0:a,1:b,2:c,3:d,4:e,5:f,6:g}

```js
const str = "abcdefg";
const obj = Object.prototype.valueOf.call(str)
obj
//{0:a,1:b,2:c,3:d,4:e,5:f,6:g}
```

**問168**
"abcdefg"のような文1文字づつの要素となる配列に変更してください
期待する結果
["a", "b", "c", "d", "e", "f", "g"]

```js
const str2 = "abcdefg";
const arry = Array.prototype.slice.call(str2);
arry

//["a", "b", "c", "d", "e", "f", "g"]
```

**問169**
"apple banana orenge"のような文字列を空白で区切り、それそれの「単語」をObjectのkey値として取得できるようにしてください。
期待する結果。
{0: "apple", 1: "banana", 2: "orenge"}

```js
var string = "apple banana orenge";
var arrayed = string.split(" ");
var obj ={};
arrayed.forEach(function(elem,i){
     obj[i] = elem;
});
obj
//{0: "apple", 1: "banana", 2: "orenge"}


//Map
var string = "apple banana orenge";
var arrayed = string.split(" ");
var map = new Map();
var obj ={};
arrayed.forEach(function(elem,i){
     map.set(i,elem);
})
map
//{0: "apple", 1: "banana", 2: "orenge"}

//entries
var string = "apple banana orenge";
var arrayed = string.split(" ");
var newarray =[];
for(value of arrayed.entries()){
     newarray.push(value)
}
var map = new Map(newarray)
map
//{0: "apple", 1: "banana", 2: "orenge"}
```


**問170**

```js
add()
```を実行した際
```
3
```
、add(2)としたら```4```add(2,3)を実行したら5が帰ってくる関数addを定義してください

```js
//デフォルトパラメータ
function add(a = 1, b = 2){
 return a + b;
}
add();// 3
add(2);//4
add(2,3)//5
```


**問171**
Promiseオブジェクトを使ってGETメソッドリクエスト，list.jsonを取得してください。urlは`http://kenmori.jp/list.json`とする
```js
function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
				reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
    	 reject(Error("Network Error"));
    };
    req.send();
  });
};

get('list.json').then(function(res){
	console.log("Success!", res);
}, function(error){
  console.log("Failed", error);
})
```

**問172**

Promseオブジェクト作成時にresolve関数に数値1を渡して、実行、成功したら渡した値をconsole出力、
doneしたら次のthenメソッドの成功時に2を足した値を出力してください。

```js
var promise1 = new Promise(function(resolve, reject){
  resolve(1);
})
promise1.then(function(val){
  console.log(val);
  return val + 2;
}).then(function(val){
  console.log(val);
});
```

**問173**

右の様な```{name: 'hogehoge',age: 80}```を別の変数「obj2」に代入したい。
Objectを参照渡しすると代入先の値が変わるとオリジンの値も変わります。originに影響のない新しいオブジェクトとしてオリジンと同じ値をもつインスタンスを生成してください。
またorigin.name='oo'としても「obj2.nameが'hogehoge'」で変わらないことを確認してください

```js
//一例
var origin = {name: 'hogehoge',age: 80};
var obj2 = JSON.parse(JSON.stringify(origin));
obj2
//Object {name: "hogehoge", age: 80}
origin.name = "oo"
//"oo"
obj2.name
//"hogehoge"
```

**問174**

こちらを使って、

```js
function getKey(k) {
  return `a key named ${k}`;
}
```
オブジェクトobjのプロパティkeyから上記getKey関数に'enabled'文字列を渡してcallし、objのキーがa keynamed enabled、値がtrueになるようなobjの作りにしてくだささい
期待する結果:``` {id: 5, name: "San Francisco", a key named enabled: true}```

```js
// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```


**問175**

以下の様な

```js
const name = 'kenji morita';
const address = 'shibuya';

const obj = {
 name : name,
 morita: morita,
 episodeTheree: 3,
 mayTheForth: 4,
 address: address,
}
```
objの宣言をショートハンドを使ってなおしてください

```js
const obj = {
 name,
 episodeTheree: 3,
 mayTheForth: 4,
 address,
}
obj// {name: "kenji morita", episodeTheree: 3, mayTheForth: 4, address: "shibuya"}

```

**問176**

document上に何個かある```class='foo'```を配列の様なオブジェクトからnodeオブジェクトに

```js
const foo = document.querySelector('.foo');
const nodes = Array.from(foo);
```

**問177**

```
[[0, 1], [2, 3], [4,5]]
```
をフラットにしてください
期待する値:[0, 1, 2, 3, 4, 5]

```js
let flat = {};
[[0, 1], [2, 3], [4,5]].reduce((memo, item, index) => {
 let flatten = memo.concat(item);
 flat[index] = flatten;
 return flatten
})
//[0, 1, 2, 3, 4, 5]
```

**問178**
下記の関数式としての宣言は

```js
// bad
const foo = function () {
};
```
なぜ好ましくないとされているか答えてください

```js
//コールスタックに識別しやすくされている
//アロー関数が使える
// good
function foo() {
}
```

**問179**

こちらの
```js
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}
```
は何が悪いか答えてください。また修正してください

```js
 //A function declaration is not a statement
 //関数宣言はステートメントではありません

let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
see http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97
```

**問180**

こちらの
```js
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}
```
渡ってきたすべての引数を結合して文字列として返す上記を端的に書き換えてください

```js
function concatenateAll(...args) {
  return args.join('');
}
```


**問181**

こちらはアンチパターンです。
```js
function f1(obj) {
  obj.key = 1;
};
```
なぜだかお答えください

```js
//Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.
パラメータとして渡されたオブジェクトを操作すると、元の呼び出し側で不要な変数副作用を引き起こす可能性があります。

function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
};
```
https://github.com/airbnb/javascript

**問182**

下記のような
```js
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
```
不必要な3項演算子を避けて同じ意味を簡潔に書いてください

```js
const foo = a || b;
const bar = !!c;
const baz = !c;
```


**問183**

こちらの記述
```js
const foo = {clark: 'kent'};
```

spaceをeslintのobject-curly-spacing や
jscsのrequireSpacesInsideObjectBracketsで良いとされている書き方に変更してください

```js
const foo = { clark: 'kent' };
```

**ここから下は鋭意制作中====================================================**

**問000**
defaultPrameter

```js
function createAddress(address, tyoume = address +  "-1", banch = tyoume + "-10"){
 return [address, tyoume , banch];
}
createAddress("meguro")
//["meguro", "meguro-1", "meguro-1-10"]
```


**問000**

f()を実行すると6が返ってくる関数を実装してください。但しfは引数にx,y,zを持ち、xはデフォルトで1、yは2で、zはObjectDestructuringとしてkeyとvalueにzにを持ちデフォルトでzの値は3とする

```js
function f([x, y] = [1,2], {z: z} = {z: 3}){
 return x + y + z;
}
f()
//6
```

**問000**

こちらを使って
```js
var people = [
{ name: "ken",
  family: {
   mother: "jone Smith"
  },
 age: 24
},
{ name: "jun",
  family: {
   mother: "jone jun"
  },
 age: 27
}];
```
下記のような出力になるように実装してください
。```js
//Name ken, Mother: jone Smith
//Name jun, Mother: jone jun
```

```js
var people = [
{ name: "ken",
  family: {
   mother: "jone Smith"
  },
 age: 24
},
{ name: "jun",
  family: {
   mother: "jone jun"
  },
 age: 27
}];
for (var {name: n, family: {mother : f}} of people){
 console.log("Name " + n + ", Mother: " + f);
}
//Name ken, Mother: jone Smith
//Name jun, Mother: jone jun

```

**問000**

こちら
```js
var metadata = {
 title: "Scratchpad",
 translations: [
  {
    locale: "de",
    localization_tags: [],
    last_edit: "2016-07-18",
    url: "kenjimorita.jp",
    title: "JavaScript"
   }
 ],
  url: "kenjimorita.jp/JavaScript"
};
```
のtitleをenglishTitleとして、translationsの中のtitleをlocalTitleとしてそれぞれ変数に代入してconsole.log出力してください

```js
var metadata = {
 title: "Scratchpad",
 translations: [
  {
    locale: "de",
    localization_tags: [],
    last_edit: "2016-07-18",
    url: "kenjimorita.jp",
    title: "JavaScript"
   }
 ],
  url: "kenjimorita.jp/JavaScript"
};
var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
console.log(englishTitle, localeTitle);
//"Scratchpad"
//"JavaScript"

```

**問000**

こちらの渡ってきたoptionの値をデフォルト設定している書き方

```js
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
}
drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```
をECMAScript2015の書き方に修正してください

```js
function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
  console.log(size, cords, radius);
}
drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});

// In Firefox, default values for destructuring assignments are not yet implemented (as described below).
// The workaround is to write the parameters in the following way:
// ({size: size = 'big', cords: cords = { x: 0, y: 0 }, radius: radius = 25} = {})

```


**問000**

```js

function Human (name){
 this.name = name;
}
function Megurokumin(number, name){
 this.ID = number;
 Human.call(this, name);
}
Megurokumin.prototype = new Human();
var ii = new Megurokumin('090', 'morita');
ii.name;
ii.ID
fafa = new Megurokumin('778', 'oosato');
fafa.name

ii instanceof Megurokumin
//true
```

**問000**
```js
var emitter = {
    callbacks : [],
    register: fnction(fn){
     this.callbacks.push(fn);
    },
    onOpen: funciton(){
      callbacks.forEach(function(fn){
        fn();
      )
    }
 }
```


**問000**
```js

function add (){console.log(this.x) };
var obj = {x: 5};
add.apply(obj)
//5
```

**問000**
```js
//apply
function add (y, z){console.log(this.x, y + z ) };
add.apply({x: 3}, [5, 6])

//call
function add (y, z){console.log(this.x, y + z ) };
add.call({x: 3}, 5, 6)
```


**問000**
```js
var int = 8;
var module = {
 int: 4,
 fn : function(){return this.int;}
}
module.fn()
//4
var fnn = module.fn
fnn()
//8


var fnn = module.fn.bind(module)
fnn()
//生成する関数にもともとのthis参照しているオブジェクトを束縛させる必要がある
```

**問000**

```js
function list (){
 return Array.prototype.slice.call(arguments);
}
list(2,3,4);
```
```
function list (){
 return Array.prototype.slice.call(arguments);
}
var bindedList = list.bind(null, 1);
bindedList(3,4,5)
//[1, 3, 4, 5]
```

**問000**
```js
function fa () {
 return this
}
var ii = fa.bind("morita");
```

**問000**
```js
var list = document.getElementById('list');
var fragment = document.createDocumentFragment();
var array = ["Internet Explorer", "Mozilla Firefox", "Safari", "Chrome", "Opera"];
var newnode = array.forEach(function(elem){
    var li = document.createElement("li");
    li.textContent = elem;
    fragment.appendChild(li);
})
list.appendChild(fragment);
//全てのブラウザで利用可能
//返り値はDocumentFragmentへの参照。メモリ上に存在
//DOMツリーに追加するのではないのでリフローが行われない
```


**問000**
```js
var {c:foo, d} = {
  c:"foo",
  d:"bar"
};
```

**問000**
```js
{g,h}={g:3, h:4};
({g,h}={g:3, h:4});

```

**問000**
ローカルストレージとセッションストレージの違いを教えてください.


```js
データの保存のされ方が違う
ローカルストレージ
同じオリジン間で共有されるストレージ。
ブラウザに保存される
localstrageは他のタブ間でもデータが共有される
あるタブで保存されたデータは即座に違うタブで参照できる
ページを更新して残っている

セッションストレージ
ブラウジングコンテキスト(タブ)に保存される
異なるタブなら異なるsessionストレージ
同一タブ内なら保存は維持される


ストレージ内のデータは文字列
ストレージにオブジェクトは渡せない(JSONを使ってください)

```

**問000**
```js
localStrage.foo = "fafa";
localStrage.setItem("foo","fafa");
localStrage.getItem("foo");
localStorage.removeItem("foo")
localStorage.clear();
var key = localStorage.key(0)
console.log(key + "のストレージは" + localStorage[key]);
```



**問000**
Storage

```js
//storageの値が変わったら全てのタブで発火する
window.addEventListener("storage",function(e){
},false);
//storage値が変わったタブでは発火されない

//StorageEvent
//key
//oldVAlue
//newValue
//url(ストレージが変わったページのurl)
//storageArea(変更が起こったエリアlocalStorageがSesstionStorage)
```

**問000**
Web Messaging
```js
win=window.open("/");
win.document.body.textContent="書き換えました";

外から送るのは指示だけで実際の実装は内部でやる方がいい
(実際の開かれたページで開かれた分だけ読み込む必要があるから)

指示を与える方法がWeb Messaging
postMessage("メッセージ","/"); //他のオリジンでもメッセージを送ることができる

ある別ブラウジングコンテキストからメッセージが送られてきた場合発火
window.addEventListener("message",function(e){
    console.log("送られてきたメッセージは",e.data);
    e.source.postMessage("返信",e.origin);//返信できる
});

```


**問000**
```js
ボイラープレートコード（似ているのに省略できないお決まりのコード断片）
```

**問000**
```js
function CreateId(id){
 this.id = id;
}
CreateId.prototype.get = function(){
 console.log(this.id);
}
var create = new CreateId(10);
create.get()//10

//setTimeoutはthisがwindow設定なのでうまくいかない
//オブジェクトのメソッドはオブジェクトに束縛されているものではなく、その時々の実行コンテキスト(呼び出し部分)において実行される
setTimeout(create.get, 1000);
//こうする
setTimeout(create.get.bind(create), 1000);
```


**問000**
```js
{
const B = 5;
    B = 10; // TypeError: Assignment to constant variable

    const ARR = [5, 6];
    ARR.push(7);
    console.log(ARR); // [5,6,7]
    ARR = 10; // TypeError: Assignment to constant variable
    ARR[0] = 3; // value is mutable
    console.log(ARR); // [3,6,7]
}
```

**問000**
```js
function Person() {
    var self = this;
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}

```

```js
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // `this` properly refers to the person object
    }, 1000);
}

var p = new Person();
```


**問000**
RestOperator
```js
function foo(...args) {
    console.log(args);
}
foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

**問000**

```js
function getGame(make, model, value) {
 return {
  make,
  model,
  value,
  ['make' + make] : true,
  depreciate() {
   this.value -= 2000;
  }
 }
}
let game = getGame('nintendo', 'pokemonGo', 3000);
```


**問000**

```js
var parent = {
 foo() {
  console.log("hello from the parent");
 }
}
var child = {
 foo() {
  super.foo();
  console.log("hello from the child");
 }
}
Object.setPrototypeOf(child, parent);
child.foo()
VM9460:3 hello from the parent
VM9460:9 hello from the child
```

**問000**
http://exploringjs.com/es6/ch_oop-besides-classes.html#Object_assign

```js
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};
function processContent(options) {
    options = Object.assign({}, DEFAULTS, options); // (A)
    ···
}

```

**問000**
```js
SomeClass.prototype.someMethod = function (arg1, arg2) {
    ···
};
SomeClass.prototype.anotherMethod = function () {
    ···
};
```
とはちがう別の方法でメソッドを定義してください

```js
Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2) {
        ···
    },
    anotherMethod() {
        ···
    }
});
```
**問000**

こちらは値を割り当てられません。
```js
const proto = Object.defineProperty({}, 'prop', {
    writable: false,
    configurable: true,
    value: 123,
});
const obj = Object.create(proto);
obj.prop = 456;
    // TypeError: Cannot assign to read-only property
```

valueを書き換えてください

```js
const proto = Object.defineProperty({}, 'prop', {
    writable: false,
    configurable: true,
    value: 123,
});
const obj = Object.create(proto);
Object.defineProperty(obj, 'prop', {value: 456});
console.log(obj.prop); // 456
```

**問000**
```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}
> const cp = new ColorPoint(25, 8, 'green');

> cp.toString();
//'(25, 8) in green'

> cp instanceof ColorPoint
//true
> cp instanceof Point
//true

> typeof Point
//'function'
//In fact, the result of a class definition is a function:


```

**問000**
```js
var domLinks = document.querySelectorAll('a[href]');
var links = Array.prototype.slice.call(domLinks);
links.forEach(function (link) {
    console.log(link);
});

const domLinks = document.querySelectorAll('a[href]');
const links = Array.from(domLinks);
links.forEach(function (link) {
    console.log(link);
});
```


**問000**
```js
const bar = function baz() {};
console.log(bar.name); // baz

Because it comes first, 
the function expression’s name baz takes precedence over other names (e.g. the name bar provided via the variable declaration):
```

**問000**
```js
var arr = ['a','b'];
for(let [index, elem] of arr.entries()){
 console.log(`${index}:${elem}`)
}
//0:a
//1:b
```


**問000**
```js
let arryLike = {length:2,0:'a', 1: 'b'};
for(let x of Array.from(arryLike)){
 console.log(x)
}
```

**問000**

これは期待する値が出力されない。

```js
const arr = [];
for (var i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [3,3,3]
```
```js
Every i in the bodies of the three arrow functions refers to the same binding, 
which is why they all return the same value.
If you let-declare a variable, a new binding is created for each loop iteration:

const arr = [];
for (let i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]
```



**問000**

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <div id="content"></div>
    <script>
        const entries = [
            ['yes', 'ja'],
            ['no', 'nein'],
            ['perhaps', 'vielleicht'],
        ];
        const content = document.getElementById('content');
        for (let [source, target] of entries) { // (A)
            content.insertAdjacentHTML('beforeend',
                `<div><a id="${source}" href="">${source}</a></div>`);
            document.getElementById(source).addEventListener(
                'click', (event) => {
                    event.preventDefault();
                    alert(target); // (B)
                });
        }
    </script>
</body>
</html>

```

**問000**

下記consoleは

```js
const foo = 'outer';
function bar(func = x => foo) {
    const foo = 'inner';
    console.log(func());
}
bar();
```
何を出力するか。またその理由を答えてください。


```js
//outer

The scope of parameter default values is separate from the scope of the body (the former surrounds the latter).
That means that methods or functions defined “inside” parameter default values don’t see the local variables of the body:
```


**問000**
Destructuring helps with processing return values:

```js
const obj = { foo: 123 };

const {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable); // true true
```



**問000**
```js
Destructuring helps with processing return values:

const [all, year, month, day] =　/^(\d\d\d\d)-(\d\d)-(\d\d)$/
.exec('2999-12-31');

```


**問000**
```js
const arr2 = [
    {name: 'Jane', age: 41},
    {name: 'John', age: 40},
];
for (const {name, age} of arr2) {
    console.log(name, age);
}
// Output:
// Jane 41
// John 40
```


**問000**
```js

```


**問000**
```js

```


**問000**
```js

```


**問000**
```js

```



**問000**
```js

```



**問000**
```js

```



**問000**
```js

```


**問000**
```js

```


**問000**
```js

```


**問000**
```js

```

参照
http://exploringjs.com/es6/
https://leanpub.com/understandinges6/read
https://github.com/airbnb/javascript
http://uhyohyo.net/javascript/
https://developer.mozilla.org/ja/docs/Web/API/document
http://foreignkey.toyao.net/archives/763
https://github.com/metagrover/ES6-for-humans
https://www.amazon.co.jp/%E3%83%91%E3%83%BC%E3%83%95%E3%82%A7%E3%82%AF%E3%83%88JavaScript-%E4%BA%95%E4%B8%8A%E8%AA%A0%E4%B8%80%E9%83%8E-ebook/dp/B00P2EG5LC
https://www.oreilly.co.jp/books/9784873115733/
https://www.oreilly.co.jp/books/9784873116211/
http://gihyo.jp/magazine/wdpress/archive/2015/vol87
