const repl = require('repl');

repl.start({
    prompt: '> ',
    replMode: repl.REPL_MODE_STRICT,
    ignoreUndefined: true,
});
