require('dotenv').config();

console.log(process.env.DISCORD_BOT_TOKEN);
const {Client} = require('discord.js');
const prefix ="$";

const client = new Client({partials:['MESSAGE', 'REACTION']});

client.on('ready', ()=>{
    console.log(`${client.user.tag} has logged in`);
})
client.on('message', (message)=>{

    if(message.content === 'hello'){
        message.channel.send(`Hello ${message.author}`);
    }
})
client.on('message',(message)=>{

    if(message.author.bot)return;
    if (message.content.startsWith(prefix)){
        const [comend, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
    
    if(comend === 'kick')
    if(message.member.hasPermission('kickMembers'))
        return message.reply('You do not have permissions to use that comand');
        if(args.length===0)
        return message.reply('Please provide an ID');
        const member = message.guild.members.cache.get(args[0]);
        if(member){
            member.kick().then((member)=>{
                message.channel.send(`${member} was kicked`).catch((err)=>{
                    message.channel.send(`I do not have permissions to kick user`)
                })
            })
        }else{
            message.channel.send('That member was not found');
        } 
    } else if (comend ==='ban'){ if(message.member.hasPermission('banMembers'))
        return message.reply('You do not have permissions to use that comand');
        if(args.length===0)
        return message.reply('Please provide an ID');
        message.guild.members.ban(args[0]).then(member=>{
            message.channel.send(`User is ban  from server`)
        }).catch((err)=>{
            message.channel.send(`An error occured`)
        })
}
})
client.on('message',(message)=>{
    if(message.author.bot)return;
    if (message.content.startsWith(prefix)){
        const [comend, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
    
    if(comend === 'unban')
    if(message.member.hasPermission('unBanMembers'))
        return message.reply('You do not have permissions to use that comand');
        if(args.length===0)
        return message.reply('Please provide an ID');
        const banList = message.guild.fetchBans();
        const bannedUser = banList.find(member=>member.id === 'memberId');
        if(bannedUser){
            message.guild.unban(member, 'Unbanned by message.author.tag').then(member => {
            message.channel.send(`Unbanned ${member}`);
        }).catch((err)=>{
            message.channel.send(`An error occured`);
        });
        }
    }
})
client.on('messageReactionAdd', (reaction, user)=>{
    const {name} = reaction.emoji;
    const guild = reaction.message.guild.members.cache
    if(reaction.message.id ==='828362759149322350'){
        switch(name){
            case ':strawberry:':
                member.roles.add('828362759149322350');
                break;
            case':snake:':
                member.roles.add('828362759149322350');
                break;
            case':peach:':
                member.roles.add('828362759149322350');
                break;
            case':peach:':
                member.roles.add('828362759149322350');
                break;
        }
    }
})
client.on('messageReactionRemove', (reaction, user)=>{
    const {name} = reaction.emoji;
    const guild = reaction.message.guild.members.cache
    if(reaction.message.id ==='828362759149322350'){
        switch(name){
            case ':strawberry:':
                member.roles.remove('828362759149322350');
                break;
            case':snake:':
                member.roles.remove('828362759149322350');
                break;
            case':peach:':
                member.roles.remove('828362759149322350');
                break;
            case':peach:':
                member.roles.remove('828362759149322350');
                break;
        }
    }
})
client.login(process.env.DISCORD_BOT_TOKEN)