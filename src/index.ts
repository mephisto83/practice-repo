import { HostAPI } from "./api";
declare const api: HostAPI;

(async () => {
    // Get the command-line argument
    const inputArg = process.argv[0]; // The third element contains the first user argument

    if (!inputArg) {
        console.error("Please provide an input argument.");
    }

    console.log('Received input:', inputArg);

    api.output({ data: `The answer is ${inputArg}` });
    return `The answer is ${inputArg}`;
})();
