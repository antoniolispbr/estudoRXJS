import { Observable, fromEvent } from "rxjs";
import { delay, scan, filter, switchMap, retryWhen, retry,takeWhile } from "rxjs/operators"

interface IMovie {
  title: string;
}

let button = document.getElementById('button');
let output = document.getElementById('output');

let click = fromEvent(button, 'click')

function load(url: string): Observable<any>{
 return new Observable(subscriber => {
  let xhr = new XMLHttpRequest();
  output.innerText = '';

  xhr.addEventListener('load', () => {
    if (xhr.status == 200){
      let data = JSON.parse(xhr.responseText);  
      subscriber.next(data);
      subscriber.complete();
    } else {
      subscriber.error(xhr.statusText)
    }

  })
  xhr.open('GET', url);
  xhr.send();
 }).pipe(
    //retryWhen(retryStrategy({attempt: 4, timeDelay: 600}))
    retry({count: 3, delay: 1000})
 )
}

function retryStrategy({ attempt = 3, timeDelay = 1000}) {
  return (errors: Observable<any>) => {
    return errors.pipe(
      scan((acc, value) => {
        return acc + 1
      }, 0),
      takeWhile(acc => acc < attempt),
      delay(timeDelay)
    )
  }
}

function renderMovie(movies: IMovie[]){
  movies.forEach((movie: IMovie) => {
    let div = document.createElement('div');
    div.innerText = movie.title;
    output.appendChild(div);
  });
}

click.pipe(
  switchMap(() => load('./movies.json'))
).subscribe({
  next: renderMovie,
  error: (e: Error) => console.log(`Error: ${e}`),
  complete: () => console.log('Complete'),
})

