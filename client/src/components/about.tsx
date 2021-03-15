const About = () => {
  const SVGheight = 300;
  const SVGwidth = 300;
  const SVGstyle = { fill: 'purple', stroke: 'black', strokeWidth: '1' };
  const coords = [
    [10, 10],
    [150, 30],
    [290, 10],
  ];
  //
  //const center = [
  //  [140, 150],
  //  [150, 150],
  //  [160, 150],
  //];

  return (
    <>
      <h1>About</h1>
      <svg
        height={SVGheight}
        width={SVGwidth}
        style={{ border: '1px solid black' }}
      >
        <polygon
          points={`${coords[0]}, ${coords[1]}, ${coords[2]}`}
          style={SVGstyle}
        />
      </svg>
    </>
  );
};

export default About;
