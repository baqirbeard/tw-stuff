function getEmoti(alt) {
  return alt.map(codePoint => String.fromCodePoint(codePoint));
} // emoji work

function lemonColor() {
   const hexASCII = "abcdef0123456789";
   const length = hexASCII.length;
   let generated = "#";
   for(let i = 0; i < 6; i++) {
      const ranASCII = Math.floor(Math.random() * length);
      generated += hexASCII.charAt(ranASCII);
   }
   return generated;
}

(function (Scratch) {
  class baqSlashTest {
    getInfo() {
      return {
        id: 'baqSlashTest',
        color1: lemonColor(),
        name: 'baq/Test Ext',
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Template Ext',
          },
          {
            opcode: 'helloBaq',
            blockType: Scratch.BlockType.REPORTER,
            text: 'return [BAQ]',
            arguments: {
              BAQ: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello world!',
              },
            },
          },
        ],
      };
    }

    helloBaq(args) {
      const casted = Scratch.Cast.toString(args.BAQ);
      return casted;
    }

  }

  Scratch.extensions.register(new baqSlashTest());

})(Scratch);
