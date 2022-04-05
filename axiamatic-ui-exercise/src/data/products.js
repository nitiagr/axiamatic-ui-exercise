export const products = [
 { id: 1,
   name: 'Notion',
   icon: 'data:image/png;base64,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'
},
 { id: 2,
   name: 'NotionSpeed',
   icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86wK7TTAu4dzS29gScNoEezkft1UAOvLhZw&usqp=CAU'
 },
 { id: 3,
   name: 'Noimics',
   icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXeRfQmshYHaSKQUbLC4JPpgNmi8n6VflNg&usqp=CAU' 
 },
 { id: 4,
   name: 'NoyerBooks',
   icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyj19ZHjHSaUPYZaj56T_qwGjZ7ocOoXBMg&usqp=CAU'
 },
 { id: 5,
   name: 'Name-Sample1',
   icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9QcqJvNqmwW43JbhPPT3UexgVZD1xKA29w&usqp=CAU' 
 },
 { id: 6,
   name: 'Name-Sample2',
   icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnw4Tck8mXM2M7qsDFv4lxP0bi0efLrhsz-A&usqp=CAU'
 },
 { id: 7,
   name: 'Jira',
  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggIrdwZatc6y4pPEFjxZEskBpBRmH6gLBOg&usqp=CAU'
 },
 { id: 8,
   name: 'Stack',
  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuBSbxhzKbZFkBHoiHwoS296uOatcD6wguA&usqp=CAU'
 }
 
];
