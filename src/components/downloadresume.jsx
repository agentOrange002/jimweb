
const Downloadresume = () => {
              
        fetch('http://localhost:3000/files/resume2019.pdf')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'resume.pdf';
					a.click();
				});
				//window.location.href = response.url;
		});
    
}
 


 
export default Downloadresume;