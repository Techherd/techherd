export default function(context) {
  // go tell the store to update the page
  console.log(context.route)

  if (context.route.params.pageslug) {
    context.store.commit(
      'currentPage/updatePage',
      context.route.params.pageslug
    )
  } else if (context.route.name != 'index') {
    context.store.commit('currentPage/updatePage', context.route.name)
  } else if (context.route.path === '/') {
    context.store.commit('currentPage/updatePage', 'frontpage')
  }
}
