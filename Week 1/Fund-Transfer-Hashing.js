const crypto = require('crypto');

    function fundHashing(prefix)
    {
        let input = 0;
        while(true)
        {
            inputStr = "raj => chetan | 500BTC" + input;
            hash = crypto.createHash('sha256').update(inputStr).digest('hex');
            if(hash.startsWith(prefix))
            {
                return {input: inputStr , hash:hash};
            }
            input++;
        }
    }

    const result =  fundHashing('0000');
    console.log(`Input: ${result.input}`);
    console.log(`Hash: ${result.hash}`);