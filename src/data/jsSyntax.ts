// Gitアプリのカード構造 (id / title / command / description / category) を再利用した学習データ。
// command にはコピー可能な JavaScript コード例を入れています。

export type JsCategory =
  | "variable"
  | "condition"
  | "loop"
  | "function"
  | "array"
  | "object"
  | "module"
  | "error"
  | "dom"
  | "form"
  | "async"
  | "api";

export type JsSyntax = {
  id: string;
  title: string;
  command: string;
  description: string;
  category: JsCategory;
};

export const jsSyntaxes: JsSyntax[] = [
  {
    "id": "js-map",
    "title": "map()：配列を変換",
    "command": "const doubled = [1, 2, 3].map((n) => n * 2);",
    "description": "各要素に処理を適用し、結果を新しい配列で返す。元の配列は変更しない。",
    "category": "array"
  },
  {
    "id": "js-filter",
    "title": "filter()：条件で絞り込む",
    "command": "const adults = users.filter((user) => user.age >= 18);",
    "description": "条件を満たす要素だけを新しい配列で返す。",
    "category": "array"
  },
  {
    "id": "js-find",
    "title": "find()：最初の一致を取得",
    "command": "const user = users.find((user) => user.id === 1);",
    "description": "条件に合う最初の要素を返す。見つからなければ undefined。",
    "category": "array"
  },
  {
    "id": "js-find-index",
    "title": "findIndex()：一致位置を探す",
    "command": "const index = users.findIndex((user) => user.id === 1);",
    "description": "条件に合う最初の要素のインデックスを返す。見つからなければ -1。",
    "category": "array"
  },
  {
    "id": "js-some",
    "title": "some()：どれかが一致",
    "command": "const hasAdult = users.some((user) => user.age >= 18);",
    "description": "1つでも条件を満たせば true。",
    "category": "array"
  },
  {
    "id": "js-every",
    "title": "every()：すべて一致",
    "command": "const allPassed = scores.every((score) => score >= 60);",
    "description": "すべての要素が条件を満たせば true。空配列でも true。",
    "category": "array"
  },
  {
    "id": "js-for-each",
    "title": "forEach()：各要素を処理",
    "command": "items.forEach((item, index) => console.log(index, item));",
    "description": "各要素に対して処理する。戻り値は undefined。",
    "category": "array"
  },
  {
    "id": "js-reduce",
    "title": "reduce()：値を集約",
    "command": "const total = prices.reduce((sum, price) => sum + price, 0);",
    "description": "配列の値を累積して1つの結果にまとめる。",
    "category": "array"
  },
  {
    "id": "js-includes",
    "title": "includes()：要素の存在判定",
    "command": "const exists = fruits.includes(\"りんご\");",
    "description": "指定した値が配列内にあるかを true / false で返す。",
    "category": "array"
  },
  {
    "id": "js-index-of",
    "title": "indexOf()：要素の位置",
    "command": "const index = fruits.indexOf(\"りんご\");",
    "description": "指定した値の最初のインデックスを返す。なければ -1。",
    "category": "array"
  },
  {
    "id": "js-slice",
    "title": "slice()：一部を取り出す",
    "command": "const firstThree = items.slice(0, 3);",
    "description": "開始位置から終了位置の直前までを新しい配列で返す。元の配列は変更しない。",
    "category": "array"
  },
  {
    "id": "js-splice",
    "title": "splice()：要素を削除・追加",
    "command": "items.splice(1, 1, \"新しい要素\");",
    "description": "元の配列を直接変更し、削除した要素を配列で返す。",
    "category": "array"
  },
  {
    "id": "js-to-spliced",
    "title": "toSpliced()：変更せず削除・追加",
    "command": "const next = items.toSpliced(1, 1, \"新しい要素\");",
    "description": "元の配列を変更せずに、要素を入れ替えた新しい配列を返す。",
    "category": "array"
  },
  {
    "id": "js-sort",
    "title": "sort()：元の配列を並べ替え",
    "command": "numbers.sort((a, b) => a - b);",
    "description": "元の配列を直接並べ替える。数値の昇順には比較関数を指定する。",
    "category": "array"
  },
  {
    "id": "js-to-sorted",
    "title": "toSorted()：変更せず並べ替え",
    "command": "const sorted = numbers.toSorted((a, b) => a - b);",
    "description": "元の配列を変更せず、並べ替えた新しい配列を返す。",
    "category": "array"
  },
  {
    "id": "js-reverse",
    "title": "reverse()：順序を反転",
    "command": "items.reverse();",
    "description": "元の配列の要素の順序を逆にする。",
    "category": "array"
  },
  {
    "id": "js-to-reversed",
    "title": "toReversed()：変更せず反転",
    "command": "const reversed = items.toReversed();",
    "description": "元の配列を変更せず、順序を逆にした新しい配列を返す。",
    "category": "array"
  },
  {
    "id": "js-push",
    "title": "push()：末尾に追加",
    "command": "items.push(\"追加する要素\");",
    "description": "元の配列の末尾に要素を追加し、新しい配列長を返す。",
    "category": "array"
  },
  {
    "id": "js-pop",
    "title": "pop()：末尾から取り出す",
    "command": "const last = items.pop();",
    "description": "元の配列の最後の要素を削除して返す。",
    "category": "array"
  },
  {
    "id": "js-at",
    "title": "at()：位置を指定して取得",
    "command": "const last = items.at(-1);",
    "description": "指定位置の要素を取得する。負の数は末尾から数える。",
    "category": "array"
  },
  {
    "id": "js-join",
    "title": "join()：文字列に結合",
    "command": "const text = [\"HTML\", \"CSS\", \"JS\"].join(\" / \");",
    "description": "要素を区切り文字でつないで文字列にする。",
    "category": "array"
  },
  {
    "id": "js-length",
    "title": "length：配列の長さ",
    "command": "const count = items.length;",
    "description": "配列に含まれる要素の数を取得するプロパティ。",
    "category": "array"
  },
  {
    "id": "js-str-includes",
    "title": "includes()：文字列を検索",
    "command": "const found = \"JavaScript\".includes(\"Script\");",
    "description": "文字列に指定した部分文字列が含まれるか調べる。",
    "category": "variable"
  },
  {
    "id": "js-starts-with",
    "title": "startsWith()：先頭を判定",
    "command": "const isHttps = url.startsWith(\"https://\");",
    "description": "文字列が指定した文字で始まるか調べる。",
    "category": "variable"
  },
  {
    "id": "js-ends-with",
    "title": "endsWith()：末尾を判定",
    "command": "const isPng = filename.endsWith(\".png\");",
    "description": "文字列が指定した文字で終わるか調べる。",
    "category": "variable"
  },
  {
    "id": "js-str-slice",
    "title": "slice()：文字列の一部を取り出す",
    "command": "const part = \"JavaScript\".slice(0, 4);",
    "description": "指定範囲の文字を取り出して新しい文字列を返す。",
    "category": "variable"
  },
  {
    "id": "js-split",
    "title": "split()：文字列を分割",
    "command": "const words = \"HTML,CSS,JS\".split(\",\");",
    "description": "指定した区切り文字で分割し、配列を返す。",
    "category": "variable"
  },
  {
    "id": "js-replace",
    "title": "replace()：最初の一致を置換",
    "command": "const result = \"a-a-a\".replace(\"a\", \"b\");",
    "description": "文字列の最初の一致箇所を置き換え、新しい文字列を返す。",
    "category": "variable"
  },
  {
    "id": "js-replace-all",
    "title": "replaceAll()：すべて置換",
    "command": "const result = \"a-a-a\".replaceAll(\"a\", \"b\");",
    "description": "一致したすべての箇所を置き換える。",
    "category": "variable"
  },
  {
    "id": "js-trim",
    "title": "trim()：前後の空白を削除",
    "command": "const clean = \"  hello  \".trim();",
    "description": "文字列の先頭と末尾にある空白や改行などを削除する。",
    "category": "variable"
  },
  {
    "id": "js-pad-start",
    "title": "padStart()：先頭を埋める",
    "command": "const number = String(5).padStart(2, \"0\");",
    "description": "指定した文字数になるまで先頭に文字を補う。",
    "category": "variable"
  },
  {
    "id": "js-to-lower-case",
    "title": "toLowerCase()：小文字に変換",
    "command": "const lower = \"HELLO\".toLowerCase();",
    "description": "アルファベットを小文字に変換した文字列を返す。",
    "category": "variable"
  },
  {
    "id": "js-str-length",
    "title": "length：文字列の長さ",
    "command": "const count = \"JavaScript\".length;",
    "description": "文字列のUTF-16コードユニット数を返すプロパティ。絵文字などは1文字で2以上になる場合がある。",
    "category": "variable"
  },
  {
    "id": "js-object-keys",
    "title": "Object.keys()：キー一覧",
    "command": "const keys = Object.keys({ name: \"犬\", age: 3 });",
    "description": "オブジェクト自身の列挙可能な文字列キーを配列で返す。",
    "category": "object"
  },
  {
    "id": "js-object-values",
    "title": "Object.values()：値一覧",
    "command": "const values = Object.values({ name: \"犬\", age: 3 });",
    "description": "オブジェクトの値を配列で返す。",
    "category": "object"
  },
  {
    "id": "js-object-entries",
    "title": "Object.entries()：キーと値の組",
    "command": "const entries = Object.entries({ name: \"犬\", age: 3 });",
    "description": "[キー, 値] のペアを配列で返す。",
    "category": "object"
  },
  {
    "id": "js-object-from-entries",
    "title": "Object.fromEntries()：オブジェクト化",
    "command": "const obj = Object.fromEntries([[\"name\", \"犬\"], [\"age\", 3]]);",
    "description": "[キー, 値] のペアの配列などからオブジェクトを作成する。",
    "category": "object"
  },
  {
    "id": "js-object-assign",
    "title": "Object.assign()：オブジェクトを統合",
    "command": "const merged = Object.assign({}, defaults, options);",
    "description": "複数のオブジェクトの列挙可能な自身のプロパティをコピーする。コピー先は変更される。",
    "category": "object"
  },
  {
    "id": "js-has-own",
    "title": "Object.hasOwn()：自身のキーを確認",
    "command": "const exists = Object.hasOwn(user, \"name\");",
    "description": "指定プロパティを自身が持っているか判定する。継承したプロパティは対象外。",
    "category": "object"
  },
  {
    "id": "js-optional-chaining",
    "title": "?.：安全にアクセス",
    "command": "const city = user.address?.city;",
    "description": "途中が null または undefined の場合に例外を出さず undefined を返す。",
    "category": "condition"
  },
  {
    "id": "js-nullish-coalescing",
    "title": "??：null・undefined の代替値",
    "command": "const name = user.name ?? \"ゲスト\";",
    "description": "左辺が null または undefined の場合だけ右辺を使う。0 や空文字は保持する。",
    "category": "condition"
  },
  {
    "id": "js-array-destructure",
    "title": "配列の分割代入",
    "command": "const [first, second] = [\"HTML\", \"CSS\"];",
    "description": "配列の要素を位置に応じて変数へ取り出す。",
    "category": "object"
  },
  {
    "id": "js-object-destructure",
    "title": "オブジェクトの分割代入",
    "command": "const { name, age } = user;",
    "description": "オブジェクトから同名のプロパティを取り出して変数にする。",
    "category": "object"
  },
  {
    "id": "js-destructure-rename",
    "title": "分割代入で変数名を変更",
    "command": "const { name: userName } = user;",
    "description": "name プロパティを userName という変数名で取り出す。",
    "category": "object"
  },
  {
    "id": "js-destructure-default",
    "title": "分割代入でデフォルト値",
    "command": "const { role = \"guest\" } = user;",
    "description": "取り出した値が undefined の場合にデフォルト値を使う。",
    "category": "object"
  },
  {
    "id": "js-spread-array",
    "title": "スプレッド構文：配列を展開",
    "command": "const merged = [...listA, ...listB];",
    "description": "配列などの反復可能な値を展開する。配列の結合や浅いコピーに使える。",
    "category": "object"
  },
  {
    "id": "js-spread-object",
    "title": "スプレッド構文：オブジェクトを展開",
    "command": "const updated = { ...user, name: \"新しい名前\" };",
    "description": "オブジェクトの自身の列挙可能なプロパティを展開する。後に書いた同名キーで上書きされる。",
    "category": "object"
  },
  {
    "id": "js-spread-arguments",
    "title": "スプレッド構文：引数を展開",
    "command": "const max = Math.max(...numbers);",
    "description": "配列などの要素を関数の個別の引数として渡す。",
    "category": "function"
  },
  {
    "id": "js-rest-parameters",
    "title": "レストパラメータ：引数をまとめる",
    "command": "function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }",
    "description": "関数に渡された残りの引数を配列として受け取る。",
    "category": "function"
  },
  {
    "id": "js-rest-destructure",
    "title": "レスト構文：残りを受け取る",
    "command": "const [first, ...rest] = [10, 20, 30];",
    "description": "分割代入で使い、残りの要素をまとめて受け取る。",
    "category": "object"
  },
  {
    "id": "js-template-literal",
    "title": "テンプレートリテラル",
    "command": "const message = `こんにちは、${name}さん`;",
    "description": "バッククォートで囲み、${} で式を文字列に埋め込む。",
    "category": "variable"
  },
  {
    "id": "js-ternary",
    "title": "三項演算子",
    "command": "const label = score >= 60 ? \"合格\" : \"不合格\";",
    "description": "条件に応じて2つの値のどちらかを選ぶ。",
    "category": "condition"
  },
  {
    "id": "js-arrow-function",
    "title": "アロー関数",
    "command": "const square = (n) => n * n;",
    "description": "短い構文で関数を定義できる。通常の関数と this の扱いが異なる。",
    "category": "function"
  },
  {
    "id": "js-for-of",
    "title": "for...of：値を順に取り出す",
    "command": "for (const item of items) { console.log(item); }",
    "description": "反復可能なオブジェクトの各値を順番に処理する。",
    "category": "loop"
  },
  {
    "id": "js-fetch",
    "title": "fetch()：HTTPリクエスト",
    "command": "const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");",
    "description": "HTTPリクエストを行い、Response を返すPromiseを取得する。HTTPエラーのステータスだけではrejectされない。",
    "category": "api"
  },
  {
    "id": "js-async-await",
    "title": "async / await：非同期処理",
    "command": "async function load() { const result = await Promise.resolve(123); return result; }",
    "description": "Promise の完了を待ちながら非同期処理を読みやすく記述する。",
    "category": "async"
  },
  {
    "id": "js-promise-all",
    "title": "Promise.all()：並列で待つ",
    "command": "const [users, posts] = await Promise.all([getUsers(), getPosts()]);",
    "description": "複数のPromiseをまとめて待つ。1つでもrejectされると全体もrejectされる。",
    "category": "async"
  },
  {
    "id": "js-try-catch",
    "title": "try...catch：エラー処理",
    "command": "try { await loadData(); } catch (error) { console.error(error); }",
    "description": "処理中に投げられたエラーやPromiseのrejectを捕捉する。",
    "category": "error"
  },
  {
    "id": "js-query-selector",
    "title": "querySelector()：要素を取得",
    "command": "const button = document.querySelector(\".button\");",
    "description": "CSSセレクターに一致する最初の要素を取得する。なければ null。",
    "category": "dom"
  },
  {
    "id": "js-query-selector-all",
    "title": "querySelectorAll()：複数要素を取得",
    "command": "const buttons = document.querySelectorAll(\".button\");",
    "description": "一致するすべての要素を静的な NodeList として返す。",
    "category": "dom"
  },
  {
    "id": "js-add-event-listener",
    "title": "addEventListener()：イベント登録",
    "command": "button.addEventListener(\"click\", handleClick);",
    "description": "要素にイベントリスナーを登録する。関数をその場で実行せず参照を渡す。",
    "category": "dom"
  },
  {
    "id": "js-class-list-add",
    "title": "classList.add()：クラスを追加",
    "command": "element.classList.add(\"is-active\");",
    "description": "指定したCSSクラスを要素に追加する。",
    "category": "dom"
  },
  {
    "id": "js-class-list-toggle",
    "title": "classList.toggle()：クラスを切り替える",
    "command": "element.classList.toggle(\"is-open\");",
    "description": "クラスがあれば削除し、なければ追加する。",
    "category": "dom"
  },
  {
    "id": "js-closest",
    "title": "closest()：祖先要素を探す",
    "command": "const card = event.target.closest(\".card\");",
    "description": "自身から祖先へ向かって、指定セレクターに最初に一致する要素を返す。",
    "category": "dom"
  },
  {
    "id": "js-dataset",
    "title": "dataset：data属性を取得",
    "command": "const category = button.dataset.category;",
    "description": "data-category などのカスタムデータ属性へアクセスするプロパティ。",
    "category": "dom"
  },
  {
    "id": "js-text-content",
    "title": "textContent：テキストを設定",
    "command": "element.textContent = \"こんにちは\";",
    "description": "要素内のテキストを取得・設定する。HTMLとして解釈しない。",
    "category": "dom"
  },
  {
    "id": "js-create-element",
    "title": "createElement()：要素を作成",
    "command": "const li = document.createElement(\"li\");",
    "description": "新しいHTML要素を生成する。DOMへの追加は append() などで行う。",
    "category": "dom"
  },
  {
    "id": "js-append",
    "title": "append()：子要素を末尾に追加",
    "command": "list.append(li);",
    "description": "要素や文字列を末尾に挿入する。既存要素は複製でなく移動する。",
    "category": "dom"
  },
  {
    "id": "js-prevent-default",
    "title": "preventDefault()：既定動作を防止",
    "command": "event.preventDefault();",
    "description": "キャンセル可能なイベントで、送信などブラウザの既定動作を防ぐ。",
    "category": "form"
  },
  {
    "id": "js-get-bounding-client-rect",
    "title": "getBoundingClientRect()：位置を取得",
    "command": "const rect = element.getBoundingClientRect();",
    "description": "ビューポートを基準とする要素の位置・サイズを取得する。",
    "category": "dom"
  },
  {
    "id": "js-number",
    "title": "Number()：数値へ変換",
    "command": "const value = Number(\"42\");",
    "description": "値を数値に変換する。変換できない場合は NaN になることがある。",
    "category": "variable"
  },
  {
    "id": "js-number-is-nan",
    "title": "Number.isNaN()：NaN を判定",
    "command": "const invalid = Number.isNaN(value);",
    "description": "値が数値型の NaN そのものかを判定する。",
    "category": "variable"
  },
  {
    "id": "js-math-floor",
    "title": "Math.floor()：切り捨て",
    "command": "const result = Math.floor(3.9);",
    "description": "数値以下の最大の整数へ切り捨てる。",
    "category": "variable"
  },
  {
    "id": "js-math-round",
    "title": "Math.round()：四捨五入",
    "command": "const result = Math.round(3.6);",
    "description": "最も近い整数へ丸める。ちょうど中間の場合は正の無限大側へ丸める。",
    "category": "variable"
  },
  {
    "id": "js-math-random",
    "title": "Math.random()：乱数を生成",
    "command": "const n = Math.floor(Math.random() * 10);",
    "description": "0以上10未満の整数をランダムに生成する例。暗号用途には使わない。",
    "category": "variable"
  },
  {
    "id": "js-parse-int",
    "title": "parseInt()：整数として解析",
    "command": "const value = Number.parseInt(\"42px\", 10);",
    "description": "文字列の先頭から指定基数の整数として解析する。",
    "category": "variable"
  },
  {
    "id": "js-const-let",
    "title": "const / let：変数宣言",
    "command": "const name = \"太郎\";\nlet count = 0;\ncount += 1;",
    "description": "const は再代入不可、let は再代入可。const のオブジェクト内部の変更は可能。",
    "category": "variable"
  },
  {
    "id": "js-typeof",
    "title": "typeof：型を調べる",
    "command": "console.log(typeof \"abc\"); // \"string\"",
    "description": "代表値は string、number、boolean、undefined、object、function。typeof null は \"object\"。",
    "category": "variable"
  },
  {
    "id": "js-strict-equality",
    "title": "=== / !==：厳密比較",
    "command": "const isSame = 10 === \"10\"; // false",
    "description": "型変換をしない比較。基本は == より === を使う。",
    "category": "condition"
  },
  {
    "id": "js-logical",
    "title": "&& / || / !：論理演算",
    "command": "const canEnter = age >= 18 && isMember;",
    "description": "&& は両方真、|| はいずれか真、! は真偽反転。&& と || はオペランドを返すこともある。",
    "category": "condition"
  },
  {
    "id": "js-if-else",
    "title": "if / else if / else：条件分岐",
    "command": "if (score >= 80) {\n  console.log(\"A\");\n} else if (score >= 60) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}",
    "description": "上から条件を判定し、最初に一致したブロックだけを実行する。",
    "category": "condition"
  },
  {
    "id": "js-switch",
    "title": "switch / case：値で分岐",
    "command": "switch (role) {\n  case \"admin\":\n    console.log(\"管理者\");\n    break;\n  default:\n    console.log(\"一般\");\n}",
    "description": "case は厳密比較。break を忘れると次の case へ処理が進む。",
    "category": "condition"
  },
  {
    "id": "js-nullish-vs-or",
    "title": "?? と ||：デフォルト値の違い",
    "command": "const a = 0 || 10; // 10\nconst b = 0 ?? 10; // 0",
    "description": "|| は falsy（0、空文字など）で右側、?? は null / undefined だけで右側。",
    "category": "condition"
  },
  {
    "id": "js-for-loop",
    "title": "for：回数を指定して繰り返す",
    "command": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
    "description": "初期化→条件判定→本体→更新の順。配列のインデックス処理にも使う。",
    "category": "loop"
  },
  {
    "id": "js-while-loop",
    "title": "while：条件が真の間繰り返す",
    "command": "let n = 0;\nwhile (n < 3) {\n  console.log(n);\n  n++;\n}",
    "description": "条件を満たす間繰り返す。更新処理がないと無限ループになる場合がある。",
    "category": "loop"
  },
  {
    "id": "js-do-while",
    "title": "do...while：最低1回実行",
    "command": "let count = 0;\ndo {\n  count++;\n} while (count < 3);",
    "description": "条件判定が後なので、条件が偽でも本体を1回は実行する。",
    "category": "loop"
  },
  {
    "id": "js-break-continue",
    "title": "break / continue：ループ制御",
    "command": "for (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  if (i === 4) break;\n  console.log(i);\n}",
    "description": "continue はその回をスキップ、break はループ自体を終了。",
    "category": "loop"
  },
  {
    "id": "js-for-in",
    "title": "for...in：オブジェクトのキーを列挙",
    "command": "for (const key in user) {\n  if (Object.hasOwn(user, key)) console.log(key);\n}",
    "description": "列挙可能な文字列キーを巡回する。継承したキーも含み得るため hasOwn で確認。配列には通常 for...of を使う。",
    "category": "loop"
  },
  {
    "id": "js-function-declaration",
    "title": "function：関数宣言",
    "command": "function greet(name = \"ゲスト\") {\n  return `こんにちは、${name}`;\n}",
    "description": "function は関数宣言。引数に初期値を設定でき、return で結果を返せる。",
    "category": "function"
  },
  {
    "id": "js-function-expression",
    "title": "関数式：関数を変数に代入",
    "command": "const double = function (n) {\n  return n * 2;\n};",
    "description": "関数を値として変数に格納する書き方。",
    "category": "function"
  },
  {
    "id": "js-arrow-implicit",
    "title": "アロー関数：暗黙のreturn",
    "command": "const double = (n) => n * 2;",
    "description": "{} を省略した式形式では式の結果が返る。{} ありなら通常 return が必要。",
    "category": "function"
  },
  {
    "id": "js-callback",
    "title": "コールバック関数：関数を渡す",
    "command": "function run(fn) {\n  fn();\n}\nrun(() => console.log(\"実行\"));",
    "description": "関数を引数として別の関数に渡す。イベント・配列メソッドなどで頻出。",
    "category": "function"
  },
  {
    "id": "js-scope",
    "title": "スコープ：let / const の有効範囲",
    "command": "if (true) {\n  const message = \"内側\";\n  console.log(message);\n}\n// console.log(message); // ReferenceError",
    "description": "let / const はブロックスコープ。ブロックの外から直接参照できない。",
    "category": "variable"
  },
  {
    "id": "js-default-param",
    "title": "デフォルト引数",
    "command": "function add(a, b = 0) {\n  return a + b;\n}\nadd(5); // 5",
    "description": "引数が未指定または undefined の場合に初期値を使用する。",
    "category": "function"
  },
  {
    "id": "js-return",
    "title": "return：値を返して関数を終える",
    "command": "function isAdult(age) {\n  if (age < 18) return false;\n  return true;\n}",
    "description": "return は関数をその場で終了し、呼び出し元に値を返す。",
    "category": "function"
  },
  {
    "id": "js-module-export",
    "title": "export：名前付きエクスポート",
    "command": "// utils.js\nexport const tax = 0.1;\nexport function double(n) { return n * 2; }",
    "description": "別ファイルから利用できるように公開する。",
    "category": "module"
  },
  {
    "id": "js-module-import",
    "title": "import：名前付きインポート",
    "command": "// main.js\nimport { tax, double } from \"./utils.js\";",
    "description": "名前付きexportは {} を付けて読み込む。パスと拡張子は環境に合わせる。",
    "category": "module"
  },
  {
    "id": "js-module-default",
    "title": "export default：デフォルト出力",
    "command": "// greet.js\nexport default function greet() { return \"Hi\"; }\n// 別ファイル: import greet from \"./greet.js\";",
    "description": "1モジュールにつき default export は1つ。import 時の名前を任意に指定できる。",
    "category": "module"
  },
  {
    "id": "js-module-alias",
    "title": "import as：別名で読み込む",
    "command": "import { double as twice } from \"./utils.js\";",
    "description": "名前付きエクスポートを別名で参照できる。",
    "category": "module"
  },
  {
    "id": "js-try-finally",
    "title": "try / catch / finally：例外処理",
    "command": "try {\n  riskyTask();\n} catch (error) {\n  console.error(error);\n} finally {\n  console.log(\"終了処理\");\n}",
    "description": "エラー時はcatch、finallyは成功・失敗に関係なく実行される。",
    "category": "error"
  },
  {
    "id": "js-throw-error",
    "title": "throw new Error()：例外を投げる",
    "command": "if (!response.ok) {\n  throw new Error(`HTTP ${response.status}`);\n}",
    "description": "自分でエラーを発生させる。throw 後は近いcatchなどへ制御が移る。",
    "category": "error"
  },
  {
    "id": "js-json-parse",
    "title": "JSON.parse()：JSON文字列を変換",
    "command": "const user = JSON.parse(\"{\\\"name\\\":\\\"太郎\\\"}\");",
    "description": "JSON形式の文字列をJavaScriptの値に変換。構文不正なら例外が発生する。",
    "category": "object"
  },
  {
    "id": "js-json-stringify",
    "title": "JSON.stringify()：JSON文字列に変換",
    "command": "const json = JSON.stringify({ name: \"太郎\" });",
    "description": "JavaScriptの値をJSON文字列へ変換。関数や undefined などは扱いに注意。",
    "category": "object"
  },
  {
    "id": "js-object-bracket",
    "title": "ブラケット記法：動的なキーで取得",
    "command": "const key = \"name\";\nconst value = user[key];",
    "description": "プロパティ名を変数で指定するときは user[key]。user.key は文字列 key という名前のプロパティ。",
    "category": "object"
  },
  {
    "id": "js-object-update",
    "title": "オブジェクトの更新・追加",
    "command": "const user = { name: \"A\" };\nuser.name = \"B\";\nuser.age = 20;",
    "description": "const で宣言したオブジェクトもプロパティは変更・追加できる。",
    "category": "object"
  },
  {
    "id": "js-array-flat",
    "title": "flat()：ネストした配列を平坦化",
    "command": "const list = [[1, 2], [3]].flat(); // [1, 2, 3]",
    "description": "指定階層まで配列を平坦化。元の配列は変更しない。",
    "category": "array"
  },
  {
    "id": "js-array-flatmap",
    "title": "flatMap()：変換して1階層平坦化",
    "command": "const values = [1, 2].flatMap((n) => [n, n * 2]);",
    "description": "map() した結果を1階層平坦化する。",
    "category": "array"
  },
  {
    "id": "js-array-shift",
    "title": "shift() / unshift()：先頭を操作",
    "command": "const items = [2, 3];\nitems.unshift(1);\nconst first = items.shift();",
    "description": "unshift は先頭に追加、shift は先頭から取り出す。いずれも元配列を変更。",
    "category": "array"
  },
  {
    "id": "js-array-arrayfrom",
    "title": "Array.from()：配列に変換",
    "command": "const nodes = Array.from(document.querySelectorAll(\"li\"));",
    "description": "NodeList などの反復可能・配列風オブジェクトから配列を作る。",
    "category": "array"
  },
  {
    "id": "js-dom-getbyid",
    "title": "getElementById()：IDで要素取得",
    "command": "const heading = document.getElementById(\"title\");",
    "description": "IDに一致する要素を取得。見つからなければ null。",
    "category": "dom"
  },
  {
    "id": "js-dom-innerhtml",
    "title": "innerHTML：HTMLを設定",
    "command": "container.innerHTML = \"<strong>完了</strong>\";",
    "description": "文字列をHTMLとして解析する。外部入力をそのまま入れるとXSSの危険がある。",
    "category": "dom"
  },
  {
    "id": "js-dom-insertadjacent",
    "title": "insertAdjacentHTML()：HTMLを挿入",
    "command": "list.insertAdjacentHTML(\"beforeend\", \"<li>新規</li>\");",
    "description": "指定位置にHTMLを挿入。位置は beforebegin / afterbegin / beforeend / afterend。",
    "category": "dom"
  },
  {
    "id": "js-dom-append-prepend",
    "title": "append() / prepend()：要素を追加",
    "command": "list.append(newItem);\nlist.prepend(firstItem);",
    "description": "append は末尾、prepend は先頭に挿入。同じ要素を再挿入すると移動する。",
    "category": "dom"
  },
  {
    "id": "js-dom-remove",
    "title": "remove()：要素を削除",
    "command": "document.querySelector(\".item\")?.remove();",
    "description": "要素をDOMから取り除く。?. により null の場合は呼び出さない。",
    "category": "dom"
  },
  {
    "id": "js-dom-class-remove",
    "title": "classList.remove() / contains()",
    "command": "box.classList.remove(\"is-open\");\nconst open = box.classList.contains(\"is-open\");",
    "description": "remove でクラスを削除、contains で存在を真偽値で判定。",
    "category": "dom"
  },
  {
    "id": "js-dom-setattribute",
    "title": "getAttribute() / setAttribute()",
    "command": "link.setAttribute(\"href\", \"/about\");\nconst href = link.getAttribute(\"href\");",
    "description": "属性値を設定・取得する。data属性はdatasetも使える。",
    "category": "dom"
  },
  {
    "id": "js-dom-event-target",
    "title": "event.target / currentTarget",
    "command": "button.addEventListener(\"click\", (event) => {\n  console.log(event.target);\n  console.log(event.currentTarget);\n});",
    "description": "target は実際にイベントが発生した要素、currentTarget はリスナー登録先。",
    "category": "dom"
  },
  {
    "id": "js-dom-input-value",
    "title": "value：入力欄の値を読む",
    "command": "const input = document.querySelector(\"#name\");\nconst name = input?.value ?? \"\";",
    "description": "input / textarea などの入力内容は value で取得。TypeScriptでは型の絞り込みが必要な場合がある。",
    "category": "form"
  },
  {
    "id": "js-dom-form-submit",
    "title": "submitイベント：送信を受け取る",
    "command": "form.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  console.log(\"送信前に検証\");\n});",
    "description": "formのsubmitイベントで処理する。preventDefault で通常の送信を中止。",
    "category": "form"
  },
  {
    "id": "js-dom-formdata",
    "title": "FormData：フォームデータを取得",
    "command": "const data = new FormData(form);\nconst email = data.get(\"email\");",
    "description": "name属性を持つ入力要素の送信値を取り出す。get は FormDataEntryValue | null。",
    "category": "form"
  },
  {
    "id": "js-dom-validity",
    "title": "checkValidity()：フォームの検証",
    "command": "if (!form.checkValidity()) {\n  form.reportValidity();\n}",
    "description": "required / type=email などHTMLの制約に沿って検証する。reportValidity はエラー表示も行う。",
    "category": "form"
  },
  {
    "id": "js-dom-input-event",
    "title": "input / change：入力イベント",
    "command": "input.addEventListener(\"input\", (event) => {\n  console.log(event.currentTarget.value);\n});",
    "description": "input は値の変更に応じて発生。change は操作の確定時などに発生。",
    "category": "form"
  },
  {
    "id": "js-dom-form-reset",
    "title": "reset()：フォームの値を初期化",
    "command": "form.reset();",
    "description": "フォームを初期値に戻す。単純な空文字へのクリアとは異なる。",
    "category": "form"
  },
  {
    "id": "js-dom-checkbox",
    "title": "checked：チェック状態を取得",
    "command": "const isChecked = document.querySelector(\"#agree\")?.checked;",
    "description": "チェックボックス・ラジオの状態は checked（boolean）。",
    "category": "form"
  },
  {
    "id": "js-dom-select",
    "title": "select.value：選択値を取得",
    "command": "const selected = document.querySelector(\"#category\")?.value;",
    "description": "selectの選択肢の値をvalueで取得する。",
    "category": "form"
  },
  {
    "id": "js-dom-style",
    "title": "style：インラインスタイルを操作",
    "command": "box.style.display = \"none\";",
    "description": "style プロパティからインラインCSSを設定。状態変更はclassListが扱いやすい場合が多い。",
    "category": "dom"
  },
  {
    "id": "js-dom-replacechildren",
    "title": "replaceChildren()：子要素を入れ替える",
    "command": "list.replaceChildren(newItem);",
    "description": "指定要素を新しい子に置換。引数なしなら子要素をすべて削除。",
    "category": "dom"
  },
  {
    "id": "js-promise-then",
    "title": "then() / catch()：Promiseを処理",
    "command": "fetch(\"/api/items\")\n  .then((response) => response.json())\n  .then((data) => console.log(data))\n  .catch((error) => console.error(error));",
    "description": "Promiseの成功・失敗に応じて処理。async/await 以外の書き方。",
    "category": "async"
  },
  {
    "id": "js-promise-allsettled",
    "title": "Promise.allSettled()：全結果を待つ",
    "command": "const results = await Promise.allSettled([taskA(), taskB()]);",
    "description": "失敗が混じっても全Promiseの確定を待ち、fulfilled / rejected を含む結果を返す。",
    "category": "async"
  },
  {
    "id": "js-api-fetch-check",
    "title": "fetchのHTTPステータス確認",
    "command": "const response = await fetch(\"/api/items\");\nif (!response.ok) throw new Error(`HTTP ${response.status}`);",
    "description": "fetchは404・500でも通常rejectしない。response.ok を確認する。",
    "category": "api"
  },
  {
    "id": "js-api-json-response",
    "title": "response.json()：JSONレスポンス",
    "command": "const response = await fetch(\"/api/items\");\nif (!response.ok) throw new Error(\"取得失敗\");\nconst data = await response.json();",
    "description": "response.json() もPromise。JSONとして読み取りパースする。",
    "category": "api"
  },
  {
    "id": "js-api-post",
    "title": "fetch POST：JSONを送信",
    "command": "const response = await fetch(\"/api/items\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ name: \"りんご\" }),\n});",
    "description": "POSTでJSONを送る基本形。送信先APIの仕様に合わせる。",
    "category": "api"
  },
  {
    "id": "js-api-urlsearchparams",
    "title": "URLSearchParams：クエリを生成",
    "command": "const params = new URLSearchParams({ q: \"犬\", page: \"1\" });\nconst url = `/api/search?${params}`;",
    "description": "URLの検索パラメータを安全に組み立てる。",
    "category": "api"
  },
  {
    "id": "js-api-encode",
    "title": "encodeURIComponent()：URL部品をエンコード",
    "command": "const url = `/search?q=${encodeURIComponent(\"犬 猫\")}`;",
    "description": "クエリの値などをURLに使える形式に変換する。",
    "category": "api"
  },
  {
    "id": "js-api-abortcontroller",
    "title": "AbortController：リクエストを中止",
    "command": "const controller = new AbortController();\nfetch(\"/api/items\", { signal: controller.signal });\ncontroller.abort();",
    "description": "signalを渡したfetchをabort()で中止できる。",
    "category": "api"
  },
  {
    "id": "js-timeout",
    "title": "setTimeout()：後で実行",
    "command": "const timerId = setTimeout(() => console.log(\"2秒後\"), 2000);\n// clearTimeout(timerId);",
    "description": "指定ミリ秒経過後に処理を予約する。正確な実行時刻は保証されない。",
    "category": "async"
  },
  {
    "id": "js-dom-query-null",
    "title": "要素がない場合の安全な操作",
    "command": "const button = document.querySelector(\"#save\");\nbutton?.addEventListener(\"click\", () => alert(\"保存\"));",
    "description": "querySelector は null の可能性がある。?. や if (button) で対処。",
    "category": "dom"
  }
];
