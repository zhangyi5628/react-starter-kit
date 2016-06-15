import  React from 'react'

export default {
  path: '/hybrid',

  async action({next, render, context}) {
    return render(
      <div>Hello</div>
    )
  }
}
