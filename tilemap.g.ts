// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030301030303020502010303030202020302020202020203020302030302010201030303030302010203020301020302030202020202020302020203030203020302020301030303030303010303030203020203020202020202020202020202030202030202020202020202030303030302020302030303030303030302030203010303020302020202020303020302020202020203030303010203030201020202020303030202020202030302020202030301020202030303030301030303030302030203030302020202020202020202020302030203030302030203030103030303020302020202020302040202020202020203030303030301`, img`
. . . . . . . . . . 2 . 2 . . . 
. 2 2 2 . 2 2 2 2 2 2 . 2 . 2 . 
. 2 . 2 . . . . . . 2 . 2 . 2 . 
. 2 . 2 . 2 2 2 2 2 2 . 2 2 2 . 
. 2 . 2 . 2 2 . . . . . . . . . 
. . . 2 . 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 . 2 2 2 2 2 2 2 2 
. . . . . 2 2 . 2 . . . . . . . 
. 2 . 2 . . . . 2 . 2 2 2 2 2 . 
. 2 . 2 2 2 2 2 2 . . . . . 2 . 
. 2 . 2 2 2 2 . . . 2 2 2 2 2 . 
. 2 2 2 2 . . . 2 2 2 . . . . . 
. . . . . . 2 . 2 . . . 2 2 2 2 
2 2 2 2 2 2 2 . 2 . 2 . . . 2 . 
2 . . . . . . . 2 . 2 2 2 2 2 . 
2 . 2 2 2 2 2 2 2 . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.brick,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
