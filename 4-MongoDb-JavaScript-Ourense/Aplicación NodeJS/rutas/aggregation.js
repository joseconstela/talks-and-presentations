module.exports.get = (req, res, next) =>
    
    req.mongo.collection('compras').aggregate([
       {
        $group: {
          _id: null, // $pais
          total: { $sum: '$precio' },
          media_precio: { $avg: '$precio' },
          precio_minimo: { $min: '$precio' },
          precio_maximo: { $max: '$precio' }
        }
      },
      // $match
      // $project
    ])
    .toArray((error, resultado) => res.send(resultado))