// This extension has no license (the unlicnese) do whatever you want with it.
(function (Scratch) {
  const menuIconURI =
    'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MS44MTQ5NiIgaGVpZ2h0PSI4OS4wNTA5NSIgdmlld0JveD0iMCwwLDgxLjgxNDk2LDg5LjA1MDk1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAwLjU4NzI0LC0xMTcuMjYzOTUpIj48ZyBmaWxsPSIjOTk2NmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtc2l6ZT0iNDAiPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwMS41NTIwNCwyMDIuMjYyNzQpIHNjYWxlKDEuOTI5NiwxLjkyOTYpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjOTk2NmZmIj48dHNwYW4geD0iMCIgZHk9IjAiPvCfkY08L3RzcGFuPjwvdGV4dD48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS40MTI3NTkyNTU2NTE5OTo2Mi43MzYwNTM4NDcwNzE3NDQtLT4=';
  const bsv = {};
  const [check, think, ticket] = ['9989', '129300', '127915'].map(codePoint => String.fromCodePoint(codePoint)); 
// some of this code was improved by surv. btw ths is my first ever extension
  class baqSlashCNB {
    constructor() {
      bsv.This = 'this';
    }

    getInfo() {
      // <GI>
      return {
        // <start>
        id: 'baqSlashCNB',
        color1: '#FFAD33', // keffiyeh orange
        menuIconURI: menuIconURI,
        name: 'baq/Completely Normal Behaviour',
        blocks: [
          // <BLOCKS>
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'COMPLETELY NORMAL BEHAVIOUR',
          },
          {
            opcode: 'reportCNB',
            blockType: Scratch.BlockType.REPORTER,
            text: think + ' what is completely normal behaviour?',
            disableMonitor: true,
          },
          '---',
          {
            opcode: 'setCNB',
            blockType: Scratch.BlockType.COMMAND,
            text: ticket + ' make [THIS] completely normal behaviour',
            arguments: {
              THIS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'this',
              },
            },
          },
          '---',
          {
            opcode: 'isCNB',
            blockType: Scratch.BlockType.BOOLEAN,
            text: think + ' is [PNB] completely normal behaviour?',
            arguments: {
              PNB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'this',
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'NOT STRANGE AT ALL',
          },
          {
            opcode: 'nsat',
            blockType: Scratch.BlockType.REPORTER,
            text: 'NOT STRANGE AT ALL ' + check.repeat(3),
            disableMonitor: true,
          },
          {
            opcode: 'nsatbutgood',
            blockType: Scratch.BlockType.REPORTER,
            text: 'NOT STRANGE AT ALL ' + check.repeat(3) + '  but instead it\'s someone named [IDK]',
            arguments: {
              IDK: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Miyo', // we do a little trolling :troll~1:
              },
            },
          },
        ], // </BLOCKS>
      }; // </start>
    } // </GI>

    // <actual scripting>

    isCNB(args) {
      const castedPNB = Scratch.Cast.toString(args.PNB);
      // and NEVER forget to cast !!!
      return castedPNB === bsv.This;
    }

    setCNB(args) {
      const castedTHIS = Scratch.Cast.toString(args.THIS);
      // and NEVER forget to cast !!!
      bsv.This = castedTHIS;
      return '';
    }

    reportCNB() {
      return bsv.This;
    }

    nsat() {
      const nowthis = bsv.This.toUpperCase();
      return `${nowthis} IS NOT STRANGE AT ALL. NOT IN THE SLIGHTEST. ${nowthis} IS COMPLETELY NORMAL BEHAVIOUR.`;
    }

    nsatbutgood(args) {
      const castedTHIS = Scratch.Cast.toString(args.IDK).toUpperCase();
      return `${castedTHIS} IS NOT STRANGE AT ALL. NOT IN THE SLIGHTEST. ${castedTHIS} IS A COMPLETELY NORMAL INDIVIDUAL WHO INDULGES IN COMPLETELY NORMAL BEHAVIOUR.`;
    }
  } // no mo ext

  // </actual scripting>

  // as you can tell, this is a joke ext.

  Scratch.extensions.register(new baqSlashCNB());

  // now let's go baq 2 3 future and get ourselves some Vanilla Creamy Chills before someone says Canada doesn't exist
})(Scratch);
