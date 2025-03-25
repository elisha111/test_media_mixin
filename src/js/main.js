// import './style.css'
<script>
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			// Рекламный баннер B1_M (850*250)
			window.Ya.adfoxCode.create({
				ownerId: 295846,
				containerId: 'adfox_160328950210922240',
				params: {
					pp: 'g',
					ps: 'deex',
					p2: 'gzep'
				}
			});
			console.log('Рекламный баннер B1_M (850*250)');
		} else {
			// Рекламный баннер B1_D (850*110)
			window.Ya.adfoxCode.create({
				ownerId: 295846,
				containerId: 'adfox_160319557762354659',
				params: {
					pp: 'g',
					ps: 'deex',
					p2: 'gzea'
				}
			});
			console.log('Рекламный баннер B1_D (850*110)');
			document.addEventListener('DOMContentLoaded', function(){
				setTimeout(function() {
					var topBanner = $("#adfox_160319557762354659")[0].innerHTML;
                    //console.log($("#adfox_160319557762354659"), topBanner, 1);
					if(topBanner != ''){
						$("#adfox_160319557762354659").css('display', 'block');
                        $("#adfox_160319557762354659").css('height', 'unset');
						$(".lr_slogan").css('display', 'none');
						$(".lr_slogan-wrap").css('height', 'auto');
						//console.log(topBanner);
					}
				}, 1000);
			});
		}
	</script>