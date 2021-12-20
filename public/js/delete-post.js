console.log('READY TO DELETE WHEN YOU ARE')

const postDelete = async (event) => {
    event.preventDefault();

    const id = window.location.pathname.slice(6);

    console.info('PREPARE TO BE OBLITERATED!!!')

    console.info(id);

    if (id) {
        const response = await fetch('/api/posts/' + id, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete post.');
        }
    }
}

document
    .querySelector('.post-delete')
    .addEventListener('click', postDelete);