const expect = require("chai");


describe("The first unit test!", () => {
    describe("This is a description of the feature", () => {
        it("A concrete thing we are testing", () => {
            const redHex   = converter.rgbToHex(255, 0, 0);
            const greenHex = converter.rgbToHex(0, 255, 0);
            const blueHex  = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff"); 
        });
    });

    describe("This is the description of the second feature", () => {
        it("A concrete thing we are testing", () => {
            const red   = converter.hexToRgb("ff0000");
            const green = converter.hexToRgb("00ff00");
            const blue  = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
})