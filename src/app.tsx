import { For } from 'solid-js';
import { basename, extname } from 'path';
import { A } from '@solidjs/router';

function extractName(p) {
  'use server';
  return basename(p, extname(p));
}

const links = Object.keys(import.meta.glob('../countries/*')).map((path) => {
  const name = extractName(path);
  return { title: name, href: `/countries/${name}` };
});

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <ul>
        <For each={links}>
          {(link) => (
            <li>
              <A href={link.href}>Visit country {link.title}</A>
            </li>
          )}
        </For>
      </ul>
    </main>
  );
}
