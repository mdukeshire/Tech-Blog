console.log('THE SCRIPT IS LINKED!')

const postSubmit = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#comment-title').value.trim();
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = window.location.pathname.slice(6);

    if (title && content) {
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ title, content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create comment.');
        }
    }
}

document
    .querySelector('.comment-form')
    .addEventListener('submit', postSubmit);