export const Alloys = new Map([
  ['Bronze', new Map([
    ['Cobre', 2],
    ['Estaño', 1]
  ])],
  
  ['Acero', new Map([
    ['Hierro', 2],
    ['Carbon', 4]
  ])],
  
  ['Duralium', new Map([
    ['Aluminio', 2],
    ['Cobre', 1]
  ])],
  
  ['AluminiumBronze', new Map([
    ['Aluminio', 2],
    ['Bronze', 1]
  ])],
  
  ['FerroSilicon', new Map([
    ["Hierro",2],
    ["Silicon",1]
  ])],
  
  ['MagSteel', new Map([
    ["Magnesio",2],
    ["Acero",1]
  ])],
  
  ['Billon', new Map([
    ["Plata",2],["Cobre",1]
  ])],
  
  ['Soldier', new Map([
    ["Estaño",1],["Plomo",2]
  ])],
  
  ['Nickel', new Map([
    ["Hierro",2],
    ["Cobre",1]
  ])],
  
  ['Cobalto', new Map([
    ["Hierro",1],
    ["Cobre",1],
    ["Nickel",1]
  ])],
  
  ['AceroDamasco', new Map([
    ['Acero', 1],
    ['Carbon', 8],
    ['Hierro', 2]
  ])],
  
  ['CeldaP', new Map(
    [["FerroSilicon",3],
    ["Silicon",3],
    ["Vidrio",3]]
  )],
  
  ['RedstoneAlloy', new Map([
    ["Redstone",10],
    ["FerroSilicon",1],
    ["MetalEndurecido",1]
  ])],
  
  ['Titanium', new Map([
    ["MetalEndurecido",1],
    ["RedstoneAlloy",1],
    ["MetalReforzado",1]
  ])],
  
  ['MetalEndurecido', new Map([
    ['AceroDamasco', 1],
    ['Carbon', 32],
    ['AluminiumBronze', 1],
    ['Duralium', 1]
  ])],
  
  ['CorinthianBronze', new Map([
    ["Oro",1],
    ["Plata",1],
    ["Bronze",1],
    ["Cobre",1]
  ])],
  
  ['MetalReforzado', new Map([
    ["Oro",1],
    ["Soldier",1],
    ["Billon",1],
    ["MetalEndurecido",1],
    ["CorinthianBronze",1],
    ["AceroDamasco",1]
  ])]
]);