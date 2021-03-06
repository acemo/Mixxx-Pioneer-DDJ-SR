var manager = require('./../../../control-manager.js');

// Generate mappings for four channels.
for (var channelIndex = 0; channelIndex < 4; channelIndex++)
{
	var group = 'Channel' + (channelIndex + 1);

	manager.add(group, 'play', 0x90 + channelIndex, 0x0B);
	manager.add(group, 'pfl', 0x90 + channelIndex, 0x54);
	manager.add(group, 'keylock', 0x90 + channelIndex, 0x1A);
	manager.add(group, 'beatsync', 0x90 + channelIndex, 0x58);
	manager.add(group, 'cue_default', 0x90 + channelIndex, 0x0C);	
	
	// TODO: Fix this.
	manager.add(group, 'LoadSelectedTrack', 0x96, 0x46 + channelIndex);
	
	manager.add(group, 'pregain', 0xB0 + channelIndex, 0x04, 'soft-takeover');
	manager.add(group, 'filterHigh', 0xB0 + channelIndex, 0x07, 'soft-takeover')
	manager.add(group, 'filterMid', 0xB0 + channelIndex, 0x0B, 'soft-takeover');
	manager.add(group, 'filterLow', 0xB0 + channelIndex, 0x0F, 'soft-takeover');
	manager.add(group, 'rate', 0xB0 + channelIndex, 0x00, 'soft-takeover');
	manager.add(group, 'volume', 0xB0 + channelIndex, 0x13, 'soft-takeover');
}

module.exports = manager.controls;