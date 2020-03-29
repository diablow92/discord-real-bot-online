const roles = require('../roles');
module.exports = {
  usage: '[kjr]',
  description: 'Toggles on/off kjr role from yourself.',
  allowDM: false,
  onlyIn: ['verification'],
  process: (bot, message) => {
    let msg = message.content;

    const kjr = 'kjr';
    // Check if they already have the role
    const hasRole = message.member.roles.findKey('id', kjr.id);
    if (hasRole) {
      // Remove the role (KR EDIT back)
      message.member.removeRole(kjr)
      .then(
        () => {
          message.reply('I\'ve removed that role from you! :ok_hand:');
          return;
          },
          (rejectReason) => {
            // TODO: Reject handler
            console.error(rejectReason);
          })
        .catch((e) => {
          // TODO: Error handler
          console.error(e.stack);
        });
    } else {
      // Check if role is for nitro and nitro status of user
      if (checkRestricted(roleName, roles.NITRO_ONLY_ROLES) && !message.member.roles.findKey('id', findRole(message.guild, roles.NITRO_ROLE).id)){
        message.reply(`Naughty naughty... :wink: You can\'t use that role! It\'s only for ${roles.NITRO_ROLE}!`);
        return;
      }

      // Add the new role (KR EDIT back)
      message.member.addRole(kjr)
        .then(
          () => {
            message.reply('I\'ve added your new role! :ok_hand:');
            return;
          },
          (rejectReason) => {
            // TODO: Reject handler
            console.error(rejectReason);
          })
        .catch((e) => {
          // TODO: Error handler
          console.error(e.stack);
        });
    }
  }
};
