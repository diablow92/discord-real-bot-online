module.exports = {
  usage: '',
  description: 'Lists all available regions for use with the !setregion command.',
  allowDM: true,
  onlyIn: ['verification'],
  process: (bot, message) => {
    message.reply(
      'To set your region type `!setregion [Your region]` in #verification. \n' +
      'Here is the list of available regions: \n```\n' +
      'Europe\n' +
      'North America\n' +
      'South America\n' +
      'Oceania\n' +
      'Africa\n' +
      'Asia\n' +
      'Middle East\n' +
      '```'
    );
  }
};
