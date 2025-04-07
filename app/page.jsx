export default function Home() {
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
  `.repeat(5); // Repeats the text 5 times to ensure overflow

  return (
    <div className="container">
      {/* Header Box */}
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>
      
      {/* Middle Boxes */}
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
      
      {/* Footer Box */}
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>
    </div>
  );
}
