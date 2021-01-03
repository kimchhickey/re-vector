type t('a);

let make: unit => t('a);
let length: t('a) => int;

let push: (t('a), 'a) => t('a);
let pop: t('a) => t('a);
let peek: t('a) => option('a);

let get: (t('a), int) => option('a);
let getExn: (t('a), int) => 'a;
let getUnsafe: (t('a), int) => 'a;

// let set: (t('a), int, 'a) => bool;

// let setExn: (t('a), int, 'a) => unit

let setUnsafe: (t('a), int, 'a) => t('a);

// let shuffle: t('a) => t('a)

// let drop: (t('a), int) => option(t('a))

// let take: (t('a), int) => option(t('a))

// let splitAt
// let concat

// let flatten

// let map
// let mapU

// let mapWithIndex
// let mapWithIndexU

// let zip
// let zipBy

let fromArray: array('a) => t('a);
let toArray: t('a) => array('a);

// let reverse: t('a) => t('a)

let debug: t('a) => unit;
