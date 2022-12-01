// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  // console.log(req)
  // if(req.query.secret !== process.env.NEXT_APP_MY_SECRET_KEY) {
  //   return res.status(401).json({
  //     message: 'Invalid token',
  // })
  // }
  try {
    console.log(req)
    await res.revalidate("/blog")
    return res.send({revalidated: true, data: req})
  }catch (err) {
    return res.status(500).send("Error revalidating")
  }
  

}

export default handler