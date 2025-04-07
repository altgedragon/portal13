export default function Home() {
  // Long text for boxes 1-4
  const longText = `
    The quick brown fox jumps over the lazy dog. This sentence contains all letters in the English alphabet.
    Repeated to create lengthy content that will force scrollbars. Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt. The five boxing wizards jump quickly. 
    Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; 
    dozy fowl quack. Jackdaws love my big sphinx of quartz. The jay, pig, fox, zebra and my wolves quack!
  `.repeat(5);

  // Text for boxes 5-6
  const boxFiveSixText = `
    This is the content for Boxes 5 and 6 with green text. The background is now the same medium grey
    as all other boxes, but the text color distinguishes these boxes. The container is significantly
    larger than standard boxes but maintains the same styling principles.
    
    [Section 1] Demonstration of colored text on unified background
    [Section 2] All boxes share the #777777 background color
    [Section 3] Only text colors differentiate certain boxes
  `.repeat(2);

  return (
    <div className="container">
      {/* Box 1 (Top) - Pink text */}
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>

      {/* Box 6 - Green text */}
      <div className="square box-six">
        <div className="content-title">Sample Box 6</div>
        <div className="content-body">
          <p>{boxFiveSixText}</p>
        </div>
      </div>
      
      {/* Boxes 2 & 3 (Middle) - Default text */}
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
      
      {/* Box 4 (Bottom) - Pink text */}
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>
      
      {/* Box 5 - Green text */}
      <div className="square box-five">
        <div className="content-title">Sample Box 5</div>
        <div className="content-body">
          <p>{boxFiveSixText}</p>
        </div>
      </div>
    </div>
  );
}
