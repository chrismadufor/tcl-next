// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if(req.query.secret !== process.env.NEXT_APP_MY_SECRET_KEY) {
    return res.status(401).json({
      message: 'Invalid token',
  })
  }
  try {
    await res.revalidate(`/${request.query.page}`)
    return res.send({revalidated: true})
  }catch (err) {
    return res.status(500).send("Error revalidating")
  }
  

}

export default handler