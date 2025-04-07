export default function Home() {
  const longParagraph = `
    The quick brown fox jumps over the lazy dog. This sentence contains all the letters in the English alphabet. 
    Repeated multiple times to create lengthy content that will force scrollbars to appear in each container box. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl 
    nisl aliquam nisl, eget ultricies nisl nisl eget nisl. The five boxing wizards jump quickly. Pack my box with 
    five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Jackdaws 
    love my big sphinx of quartz. The jay, pig, fox, zebra and my wolves quack! Blowzy red vixens fight for a 
    quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch 
    "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just 
    flocked up to quiz and vex him. The quick onyx goblin jumps over the lazy dwarf. All questions asked by five 
    watched experts amaze the judge. Back in June we delivered oxygen equipment of the same size. The public was 
    amazed to view the quickness and dexterity of the juggler. Six crazy kings vowed to abolish my quite pitiful 
    jousts. Whenever the black fox jumped the squirrel gazed suspiciously. We promptly judged antique ivory buckles 
    for the next prize. The explorer was frozen in his big kayak just after making queer discoveries. The July sun 
    caused a fragment of black pine wax to ooze on the velvet quilt. The view from the plateau was breathtaking, 
    with undulating hills stretching to the horizon where the sky met the earth in a soft blur of blue and green. 
    A cacophony of birdsong filled the morning air as the first golden rays of dawn illuminated the misty valley below. 
  `.repeat(3); // Repeats the paragraph 3 times to ensure overflow

  return (
    <div className="container">
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="content-body">
          <p>{longParagraph}</p>
          <p>Additional content to ensure scrolling...</p>
          <p>{longParagraph}</p>
        </div>
      </div>
      
      <div className="middle-squares">
        <div className="square middle-square">
          <div className="content-title">Sample 2</div>
          <div className="content-body">
            <p>{longParagraph}</p>
            <p>More sample text for demonstration...</p>
            <p>{longParagraph}</p>
          </div>
        </div>
        <div className="square middle-square">
          <div className="content-title">Sample 3</div>
          <div className="content-body">
            <p>{longParagraph}</p>
            <p>Scrollable content example...</p>
            <p>{longParagraph}</p>
          </div>
        </div>
      </div>
      
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="content-body">
          <p>{longParagraph}</p>
          <p>Final scroll demonstration...</p>
          <p>{longParagraph}</p>
        </div>
      </div>
    </div>
  );
}
