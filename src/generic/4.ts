/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {

  }
}

interface Description {
  title: string,
  text?: string,
}

class Page extends Component<Description> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};