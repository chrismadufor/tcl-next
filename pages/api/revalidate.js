// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if(req.query.secret !== process.env.NEXT_APP_MY_SECRET_KEY) {
    return res.status(401).json({message: `Invalid token... Req key --> ${req.query} ... env key --> ${process.env.NEXT_APP_MY_SECRET_KEY}`})
  }
  try {
    await res.revalidate("/blog")
    return res.send({revalidated: true})
  }catch (err) {
    return res.status(500).send("Error revalidating")
  }
  

}

export default handler