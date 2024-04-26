// ------------------------------------ TYPES ---------------------------------------

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] //глобальный касс array <тип>

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Vladilen', 1234567] // два типа

// Any
let variable: any = 42
// ...
variable = 'New String' // без any не переопределился бы
variable = []

// ====
function sayMyName(name: string): void {  //ничего не возвращает 
  console.log(name)
}
sayMyName('Хайзенберг')

// Never
function throwError(message: string): never {  // использовать когда ф-ия либо возвращает ошибку и никогда не заканчивает выполнение
  throw new Error(message)
}

function infinite(): never { // либо когда ф-ия постоянно что-то делает
  while (true) {

  }
}

// Type
type Login = string //свой тип

const login: Login = 'admin'
// const login2: Login = 2 // по факту логин это просто строка

type ID = string | number //свой тип, который может принимать один из предложенных типов
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true  //булеан не указывали в возможных

type SomeType = string | null | undefined



// ------------------------------------ ИНТЕРФЕЙСЫ --------------------------------------- // ни во что не компилируются 

interface Rect {
    readonly id: string
    color?: string // с ? не обязательный параметр 
    size: {
      width: number
      height: number
    }
  }
  
  const rect1: Rect = {
    id: '1234',
    size: {
      width: 20,
      height: 30
    },
    color: '#ccc' //просто добавили 
  }
  
  const rect2: Rect = {
    id: '12345',
    size: {
      width: 10,
      height: 5
    }
  }
  
  rect2.color = 'black' //добавили вне создания
  // rect2.id = '3232' // рид онли проперти
  
  const rect3 = {} as Rect // строгое приведение к типу
  const rect4 = <Rect>{} // другой вариант синтаксиса
  
  // ===================== НАСЛЕДОВАНИЕ
  
  interface RectWithArea extends Rect {
    getArea: () => number // функция и тип который она возвращает
  }
  
  const rect5: RectWithArea = {
    id: '123',
    size: {
      width: 20,
      height: 20
    },
    getArea(): number {   //обязательно реализуется
      return this.size.width * this.size.height 
    }
  }
  
  // ================== ВЗАИМОДЕЙСТВИЕ С КЛАССАМИ
  
  interface IClock {
    time: Date
    setTime(date: Date): void 
  }
  
  class Clock implements IClock { //имплементируется от интерфейса, обязательно реализуем нужные методы 
    time: Date = new Date()
  
    setTime(date: Date): void {
      this.time = date
    }
  }
  
  // ================= СОЗДАТЬ ИНТЕРФЕЙС ДЛЯ ОБЪЕКТА У КОТОРОГО МНОГО ДИНАМИЧЕСКИХ КЛЮЧЕЙ
  
  interface Styles {
    [key: string]: string // формат записи
  }
  
  const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
  }

  // ------------------------------------ ENUM ---------------------------------------

  enum Membership { 
    Simple,
    Standard,
    Premium
  }
  
  const membership = Membership.Standard // по умолчанию значения 0/1/2..
  const membershipReverse = Membership[2] //по ключу
  
  console.log(membership)
  console.log(membershipReverse)
  
  enum SocialMedia {       //если будем обращаться к этим енюмам, будем получать строчку, тк она указана явно
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
  }
  
  const social = SocialMedia.INSTAGRAM
  console.log(social)

    // ------------------------------------ ФУНКЦИИ ---------------------------------------

    function add(a: number, b: number): number { // принимаемые): возвращаемый тип
        return a + b
      }
      
      function toUpperCase(str: string): string {
        return str.trim().toUpperCase()
      }
      
      interface MyPosition { 
        x: number | undefined
        y: number | undefined
      }
      
      interface MyPositionWithDefault extends MyPosition { 
        default: string
      }
      
      function position(): MyPosition                       //перегрузка
      function position(a: number): MyPositionWithDefault
      function position(a: number, b: number): MyPosition
      
      function position(a?: number, b?: number) {      // определение ф-ции, потенциально может принимать 2 параметра, но не обязательно, поэтому ставим ?
        if (!a && !b) {
          return {x: undefined, y: undefined} //не а и не б
        }
      
        if (a && !b) { 
          return {x: a, y: undefined, default: a.toString()} //только а
        }
      
        return {x: a, y: b}
      }
      
      console.log('Empty: ', position())
      console.log('One param: ', position( 42))
      console.log('Two params: ', position( 10, 15))

      // ------------------------------------ КЛАССЫ ---------------------------------------

      class Typescript {
        version: string
      
        constructor(version: string) {  // конструктор
          this.version = version
        }
      
        info(name: string) {                                         // метод, но с определенными типами
          return `[${name}]: Typescript version is ${this.version}`
        }
      }
      
      // class Car {
      //   readonly model: string
      //   readonly numberOfWheels: number = 4
      //
      //   constructor(theModel: string) {
      //     this.model = theModel // можем перезаписать поле рид онли, но тоько в конструкторе, в других методах не можем
      //   }
      // }
      
      class Car {
        readonly numberOfWheels: number = 4            // другой способ записи
        constructor(readonly model: string) {}      
      }
      // ============== МОДИФИКАТОРЫ (протектет паблик прайват)
      
      
      class Animal {
        protected voice: string = ''
        public color: string = 'black'  // по умолчанию все паблик
      
        constructor() {
          this.go()
        }
      
        private go() {
          console.log('Go')
        }
      }
      
      class Cat extends Animal {                 // наследование
        public setVoice(voice: string): void { 
          this.voice = voice
        }
      }
      
      const cat = new Cat() // когда создаем с модификатором протектед, то эти поля доступны в классе в котором создались и в классах, которые от него наследуют
      cat.setVoice('test')
      console.log(cat.color)
      // cat.voice
      
      // ===================== АБСТРАКТНЫЕ КЛАССЫ и МЕТОДЫ
      
      abstract class Component { // описываем методы, которые должны будут реализовываться в классах, которые наследуют этот
        abstract render(): void
        abstract info(): string
      }
      
      class AppComponent extends Component {
        render(): void {
          console.log('Component on render')
        }
      
        info(): string {
          return 'This is info';
        }
      }

      // ------------------------------------ GUARDS --------------------------------------- // вспомогаетльные конструкции, которые помогают работать с типами
      function strip(x: string | number) {
        if (typeof x === 'number') {
          return x.toFixed(2) 
        }
        return x.trim()
      }
      
      class MyResponse {
        header = 'response header'
        result = 'response result'
      }
      
      class MyError {
        header = 'error header'
        message = 'error message'
      }
      
      function handle(res: MyResponse | MyError) { // обрабатывает сразу два класса
        if (res instanceof MyResponse) {
          return {
            info: res.header + res.result
          }
        } else {
          return {
            info: res.header + res.message
          }
        }
      }
      
      // =================== СВОЙ СПЕЦИАЛЬНЫЙ ТИП
      
      type AlertType = 'success' | 'danger' | 'warning'
      
      function setAlertType(type: AlertType) {
        // ....
      }
      
      setAlertType('success')
      setAlertType('warning')
      
      // setAlertType('default') // ошибка,в типе нет такого значения


// ------------------------------------ GENERIC типы ---------------------------------------

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5] 
const arrayOfStrings: Array<string> = ['Hello', 'Nadia']


function reverse1(array) { //обычный варинт
    return array.reverse()
  }

function reverse<T>(array: T[]): T[] { //принимает и возвращает массив, параметр подстраивается под значения, которые мы передаем
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)

// ------------------------------------ ВСПОМАГАТЕЛЬНЫЕ ОПЕРАТОРЫ ---------------------------------------

interface Person {
    name: string
    age: number
  }
  
  type PersonKeys = keyof Person // 'name' | 'age'       тип, который состоит из ключей итерфейса 
  
  let key: PersonKeys = 'name'
  key = 'age'
  //key = 'job' - ошибка
  
  type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
  }
  
  type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'      создаем новый тип, который использует поля юзера, он не все эксклудом исключаем
  type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'  // второй вид записи (через пик выбираем что оставляем от юзера)
  
  
  let u1: UserKeysNoMeta1 = 'name'
  // u1 = '_id'  - ошбика тк тут можем указывать только мейл и нейм