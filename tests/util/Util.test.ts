import { expect } from 'chai';
import { Util } from "../../src/util/Util";

describe('clamp', function ()
{
	it('clamp lower', function ()
	{
		let result = Util.clamp(1, 3, 5);
		expect(result).equal(3);
	});

	it('clamp upper', function ()
	{
		let result = Util.clamp(6, 3, 5);
		expect(result).equal(5);
	});


	it('do not clamp', function ()
	{
		let result = Util.clamp(4, 3, 5);
		expect(result).equal(4);
	});
});

