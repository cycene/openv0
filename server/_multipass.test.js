async function test() {
  const multipass = require(`./modules/multipass/index.js`);

  const stream = {
    // used to stream updates to frontend ; if not needed pass this instead
    write: (e) => {
      true;
    },
  };

  const generated = await multipass.preset({
    stream,
    preset: `componentNew_description`,
    query: {
      description: `a simple image : https://m.media-amazon.com/images/I/918N9r-jO8L._UF1000,1000_QL80_.jpg`,
      framework: `svelte`,
      components: `shadcn`,
      icons: `lucide`,
    },
  });

  /*
  const generated = await multipass.preset({
    stream,
    preset: `componentNew_json`,
    query: {
      json: require("./_example_json_generate.test.js").stripe_products,
      framework: `react`,
      components: `shadcn`,
      icons: `lucide`,
    },
  });
  */

  /*
  const component_code_demo = `
import { Textarea } from "@/components/ui/textarea"

export function ParagraphUserInput() {
  return <Textarea placeholder="Write your text here" />
}
`.trim()

  const generated = await multipass.preset({
    // stream: `__DUPLEX_STREAM_PLACEHOLDER__`,
    stream,
    preset: `componentIterate_description`,
    query: {
      description: `add a "send" button under the paragraph input`,
      component : {
        name: `ParagraphUserInput`,
        description: `a paragraph component where the user can write a text`,
        code: component_code_demo,
      },
      framework: `react`,
      components: `shadcn`,
      icons: `lucide`,
    },
  });
  */
}
test();