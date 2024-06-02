import { createSignal , For} from 'solid-js';
import { Title, Meta } from '@solidjs/meta';

function HeadComponent({ title, metaTags }) {
  const [currentTitle, setCurrentTitle] = createSignal(title);

  // Update the title when the prop changes
  setCurrentTitle(title);

  return (
    <>
      <Title>{currentTitle()}</Title>
      <For each={metaTags}>
        {(metaTag) => (
          <Meta {...metaTag} />
        )}
      </For>
    </>
  );
}

export default HeadComponent;
