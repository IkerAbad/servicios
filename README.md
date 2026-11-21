# servicios

Aplicación Angular 15 (abril de 2023) para practicar servicios y `HttpClient`. Un servicio pide una lista de chistes de programación en español a la API pública [JokeAPI](https://v2.jokeapi.dev) y un componente los muestra en una lista.

## Qué hay

- `services/resultados.service.ts`: hace la petición GET a JokeAPI (100 chistes de la categoría `Programming`, en español) y gestiona los errores devolviendo una lista vacía.
- `chistes/chistes.component`: se suscribe al servicio y pinta cada chiste (el planteamiento y el remate, o el chiste de una línea).
- `entities/chistes.ts`: clase con los campos del chiste.
- `ng build` compila sin errores. No he abierto la aplicación en un navegador desde aquí, así que no sé si la API responde hoy como entonces.

## Cómo probarlo

```
npm ci
npx ng serve
```

y abre `http://localhost:4200/`.

## Licencia

MIT, ver [LICENSE](LICENSE).

---

# servicios (English)

An Angular 15 app (April 2023) to practice services and `HttpClient`. A service fetches a list of programming jokes in Spanish from the public [JokeAPI](https://v2.jokeapi.dev) and a component shows them in a list.

## What's inside

- `services/resultados.service.ts`: makes the GET request to JokeAPI (100 jokes from the `Programming` category, in Spanish) and handles errors by returning an empty list.
- `chistes/chistes.component`: subscribes to the service and renders each joke (setup and punchline, or the one-liner).
- `entities/chistes.ts`: a class with the joke's fields.
- `ng build` compiles without errors. I have not opened the app in a browser from here, so I do not know whether the API still answers the way it did then.

## Trying it

```
npm ci
npx ng serve
```

then open `http://localhost:4200/`.

## License

MIT, see [LICENSE](LICENSE).
