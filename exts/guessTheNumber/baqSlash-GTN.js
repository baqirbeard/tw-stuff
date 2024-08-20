function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let hideBlocks = true
let theVM = Scratch.vm

const Logic = {
  guesses: 0,
  number: randInt(1, 100),
  hint: '',
  log: 'Number picked! Start guessing!',
  hintsEnabled: true
};

function GTL(text) {
  Logic.log = text;
  return text;
}

function getEmoti(alt) {
  return alt.map(codePoint => String.fromCodePoint(codePoint));
}

function lemonColor() {
  const hexASCII = 'abcdef0123456789';
  const length = hexASCII.length;
  let generated = '#';
  for (let i = 0; i < 6; i++) {
    const ranASCII = Math.floor(Math.random() * length);
    generated += hexASCII.charAt(ranASCII);
  }
  return generated;
}

(function (Scratch) {
  'use strict'; // i need to escape the sandbox
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('baqslashGTN needs to be run UNSANDBOXED\n\nbecause apparently refreshing blocks needs admin privileges or whatever :P');
  }

  class baqSlashGTN {
    getInfo() {
      return {
        id: 'baqSlashGTN',
        color1: lemonColor(),
        name: 'baq/Guess the Number API',
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Game Blocks',
          },
          {
            opcode: 'startGame',
            blockType: Scratch.BlockType.COMMAND,
            text: 'pick number between [MIN] and [MAX]',
            arguments: {
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
          },
          {
            opcode: 'doGuess',
            blockType: Scratch.BlockType.COMMAND,
            text: 'submit guess [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: 'returnLog',
            blockType: Scratch.BlockType.REPORTER,
            text: 'result',
          },
          '---',
          {
            func: 'enableMoreBlocks',
            blockType: Scratch.BlockType.BUTTON,
            text: 'show more blocks',
          },
          '---',
          {
            opcode: 'returnGuesses',
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: hideBlocks,
            text: 'GTN total guesses',
          },
          {
            opcode: 'returnHint',
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: hideBlocks,
            text: 'GTN guess hint',
          },
        ],
      };
    }

    startGame(args) {
      const MIN = Scratch.Cast.toNumber(args.MIN);
      const MAX = Scratch.Cast.toNumber(args.MAX);

      if (MIN > MAX) {
        [MIN, MAX] = [MAX, MIN];
      }

      Logic.number = randInt(MIN, MAX);
      Logic.guesses = 0;
      Logic.hint = 'bud you gotta guess first';
      GTL('Number picked between ' + MIN + ' and ' + MAX + '! Start guessing!');
    }

    doGuess(args) {
      const guess = Scratch.Cast.toNumber(args.A);

      if (guess === Logic.number) {
        Logic.guesses += 1;
        Logic.hint = '??? = ' + guess;
        Logic.log = `${guess} was the number!`;
      } else {
        Logic.guesses += 1;
        Logic.hint = guess > Logic.number ? `??? < ${guess}` : `??? > ${guess}`;
        Logic.log = "Guess again! (" + Logic.hint + ")" ;
      }
      return Logic.log;
    }

    enableMoreBlocks() {
      hideBlocks = false;
      console.log("")
      theVM.extensionManager.refreshBlocks();
    }

    returnGuesses() {
      return Logic.guesses;
    }
    returnHint() {
      return Logic.hint;
    }
    returnLog() {
      return Logic.log;
    }
  }

  Scratch.extensions.register(new baqSlashGTN());

})(Scratch);
