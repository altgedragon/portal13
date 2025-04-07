export default function Home() {
  // Long text for boxes 1-4
  const longText = `
    The quick brown fox jumps over the lazy dog. This sentence contains all letters in the English alphabet.
    Repeated to create lengthy content that will force scrollbars. Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt. The five boxing wizards jump quickly. 
    Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; 
    dozy fowl quack. Jackdaws love my big sphinx of quartz. The jay, pig, fox, zebra and my wolves quack!
    Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is 
    to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas 
    exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him. The quick onyx goblin jumps 
    over the lazy dwarf. All questions asked by five watched experts amaze the judge. Back in June we delivered 
    oxygen equipment of the same size. The public was amazed to view the quickness and dexterity of the juggler.
  `.repeat(5);

  // Short text for boxes 5-6
  const shortText = `This is the non-scrolling sample text for Boxes 5 and 6. All content is visible at once.`;

  return (
    <div className="container">
      {/* Box 1 (Top) */}
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>

      {/* New Box 6 (Above 2 & 3) */}
      <div className="square box-five">
        <div className="content-title">Sample Box 6</div>
        <div className="content-body">
          <p>{shortText}</p>
        </div>
      </div>
      
      {/* Boxes 2 & 3 (Middle) */}
      <div className="middle-squares">
        <div className="square middle-square">
          <div className="content-title">Sample 2</div>
          <div className="content-body">
            <p>{longText}</p>
          </div>
        </div>
        <div className="square middle-square">
          <div className="content-title">Sample 3</div>
          <div className="content-body">
            <p>{longText}</p>
          </div>
        </div>
      </div>
      
      {/* Box 4 (Bottom) */}
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>
      
      {/* Box 5 (Existing) */}
      <div className="square box-five">
        <div className="content-title">Sample Box 5</div>
        <div className="content-body">
          <p>{shortText}</p>
        </div>
      </div>
    </div>
  );
}
