var g_BgList=null;const g_ExampleBgs=['https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/233510/de5ba1b672dbef2e5a8dfbaa57d0c4db2e57e811.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/381640/23791a552b10e8644ab186e8bc544c5b3b98adf9.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/452440/e02102e7ac3fc71ba1fb632d9a49d0d00a447e1a.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/644200/83ad7f6d0052a7889ef28c7e3b8a3a1acdec828c.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/386480/119a5e4828facc5f55a992cb27d4a4b25dd57241.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/298790/02d63efd5388a8e3f54edcc3b32f4f4e83ce39c0.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/269670/48903f878d401cc8cae3852df7c045667edcb5c3.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/269670/e5cf60de4230763e29494259a8b26b64d7ae2e4f.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/269670/0b4da71eeb65ee1f4fd1bca07242949b9b63ff67.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/963690/54daf84fc45aa00e527dd7577e5e75e15ffb3244.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/226720/4a7f3784347cf0a24611a34cbfc7e4af748974da.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/284790/de8ed4d489bc6881b955ea807d163b8b8e9eccec.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/338340/18e19ccc692200a0fd01313bde0f49646d818dce.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/348340/233023dcc94213f6eb9cb08ce1024cf90ff1e611.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/281990/b30c69e49437b45ca2e91fac6aaeaadfcaa48bfc.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/543930/805ffc96db35e2d3832db7326bf3024787f26018.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/245050/7a5612e0a52a3f5f83d45aafde4598f0030f8e60.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/206370/709ae1f1496ffece7674314a348bfa03e03e19e3.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/257510/2dfae9ccdb28b4b8df1266db0c92788154b96d5e.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/406870/5b23b7838e196034e59628a2391bd8085571ca74.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/444140/6f99fa9f09883a8ae56c50bc16907d36ff7ec466.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/461840/562e28c9a76d5e5dfe66f10e874b3adf21cb5e47.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/566780/7bf829ed22864ab20f21777c4fc065547655bbe9.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/206440/150db29a236ead3226d4b5f749119cca71a95548.jpeg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/206440/700a87817fb435a255f39c698345d4ea4c4d57c4.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/356400/c792c7333c00d3b3f95ef4f2247f99d4201ca162.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/489460/8583d2736f44b9fa9b5b1c340cdc62802139ef61.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/333510/3ef09a0b71fcfe908049ae5c26a87cfd00d37b9d.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/237760/9e13b0cea237de286ed475b46d8c138ab62e76e4.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/428750/9ac832ab8f844169b94dece2f48f017aa0d26cbe.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/221680/a44bf317cbd95c87444c435f9d471ac12465284c.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/239160/f2b81de7d19eb3d3dcea52ab5011d8fcf0f4c97a.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/313400/1a64d6788313ddfb0af23ba96f80361c1450cded.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/257850/a617ff45cc636aea3fbaafd9f680cf4657fcf3c4.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/339460/1cd2fc9b07a6dd80d431acb96933a00bcbbefbde.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/335560/4e516909c726e7f854ff54f51609d9f70b718b57.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/96100/a6422b6db06e7a2a1c4dcc68a1bf181d467df228.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/208140/9d5a4b4c42739a468bd02328b4eac57b3c5a550f.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/296550/6459f31089d4ee72fb2989c7f6b6e17f188d2ff6.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/8500/aafc853b743b5bc9169d025ddd6932900a0b737d.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/501830/daea4c129bb0980356cfee8262a249e8a6cc91c2.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/485630/100bfd0fb764b30751b39e2b7b1e0bc1aa5f8792.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/469890/efe44b17b3c844055387e904a558a1801b4288b9.jpg','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/336200/9b798e4380c70b900c95015c91be48ba60148b20.jpg',];var g_BgWidth=0;var g_BgHeight=0;var g_VideoWidth=0;var g_VideoHeight=0;var g_Bg=0;var g_Bg_Url=null;var g_Bg_busy=false;var g_IsAnimated=false;var g_AnimatedTimer=null;const{createFFmpeg,fetchFile}=FFmpeg;var g_FFmpeg=null;var g_GlobalID=0;var g_Format='image/png';var g_Extension='png';var g_FormatAnimated='image/gif';var g_ExtensionAnimated='gif';var g_PreModify=true;var g_RefreshAnimated=true;var g_QualityAnimated=0;var g_FramerateAnimated=0;var g_RefreshRate=30;const g_ProxyURL='/tools/cropper/x/';var g_ShrinkingTimeout=null;const g_ResizeTimeDuration=300;const g_ResizeTimeDelay=300;var g_ConAvatar=0;var g_StockMyWorkshop=[{wd1:1,wd2:2,wd3:3,wd4:4,wd5:5},{wd1:11,wd2:12,wd3:13,wd4:14,wd5:15},{wd1:21,wd2:22,wd3:23,wd4:24,wd5:25},];const g_Showcases=[[true,tl.cropperModalAddShowcase0],[true,tl.cropperModalAddShowcase1],[true,tl.cropperModalAddShowcase2],[true,tl.cropperModalAddShowcase3],[true,tl.cropperModalAddShowcase4],[true,tl.cropperModalAddShowcase5],[true,tl.cropperModalAddShowcase6],[false,'Custom Info Box'],[true,tl.cropperModalAddShowcase7],[true,tl.cropperModalAddShowcase8],[true,tl.cropperModalAddShowcase9],[true,tl.cropperModalAddShowcase10],[true,tl.cropperModalAddShowcase11],[false,tl.cropperModalAddShowcase0],]
function fn_PreModify(sid,base64str,format)
{if(!g_PreModify)
return base64str;let originalArray=Uint8Array.from(atob(base64str),_=>_.charCodeAt(0));switch(format)
{case 'image/gif':{originalArray[originalArray.length-1]=0x21;let str='';originalArray.forEach((e,i)=>{str+=String.fromCharCode(e);});return btoa(str);}
case 'image/png':{let modifiedArray=new Uint8Array(originalArray.length+1);modifiedArray.set(originalArray);modifiedArray.set([0x01,0x49,0x45,0x4E,0x44,0x00,0xD1,0x1A,0x4F,0xE1],modifiedArray.length-10);let str='';modifiedArray.forEach((e,i)=>{str+=String.fromCharCode(e);});return btoa(str);}
case 'image/jpeg':{originalArray[originalArray.length-1]=0xDA;let str='';originalArray.forEach((e,i)=>{str+=String.fromCharCode(e);});return btoa(str);}
case 'image/webp':{let val=(originalArray[0x30])|(originalArray[0x31]<<8)|(originalArray[0x32]<<16)|(originalArray[0x33]<<24);++val;originalArray[0x30]=(val&0xff);originalArray[0x31]=(val&0xff00)>>8;originalArray[0x32]=(val&0xff0000)>>16;originalArray[0x33]=(val&0xff000000)>>24;let str='';originalArray.forEach((e,i)=>{str+=String.fromCharCode(e);});return btoa(str);}}
return base64str;}
function fn_FromCenter(_e)
{return g_Bg.width/2-($('body').width()/2-$(_e).offset().left);}
const fetchAsBlob=url=>fetch(url,{cache:'force-cache'}).then(response=>response.blob());const convertBlobToBase64=blob=>new Promise((resolve,reject)=>{const reader=new FileReader;reader.onerror=reject;reader.onload=()=>{resolve(reader.result);};reader.readAsDataURL(blob);});async function fn_SetBackground(_url,customfile)
{if(g_Bg_busy)return;g_Bg_busy=true;$('.loading_background').css({'opacity':1,'pointer-events':'unset'});let deter=_url.split('?')[0].split('.');const file_ext=deter[deter.length-1];const startswith=['http://steamcommunity-a.akamaihd.net/economy/image/','https://steamcommunity-a.akamaihd.net/economy/image/','http://steamcommunity.com/economy/profilebackground/items/','https://steamcommunity.com/economy/profilebackground/items/','http://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/','https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/','http://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/','https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/','http://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/','https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/'];let b64url,inurl=_url;if(customfile===false)
{for(const _ of startswith)
{if(_url.startsWith(_)&&(file_ext!='webm'&&file_ext!='mp4'))
{inurl=`${g_ProxyURL}${encodeURIComponent(_url)}`;break;}}
try
{b64url=await convertBlobToBase64(await fetchAsBlob(inurl));}
catch(error)
{console.error(`Couldn't fetch the following background: ${_url}\nProbably due to the CORS policy (check if the headers include "Access-Control-Allow-Origin: *").`);$('.loading_background').css({'opacity':0});g_Bg_busy=false;return;}}
else b64url=customfile;clearInterval(g_AnimatedTimer);let bg_temp=g_Bg;let t_Bg=new Image;let t_Bg_url=_url;t_Bg.onload=function()
{g_Bg=t_Bg;g_Bg_url=t_Bg_url;g_BgWidth=g_Bg.width;g_BgHeight=g_Bg.height;g_ConAvatar.fillStyle='black';g_ConAvatar.fillRect(0,0,164,164);g_ConAvatar.drawImage(g_Bg,-fn_FromCenter('.steam_avatar'),-$('.steam_avatar').offset().top+$('#profile_page').offset().top);$('#profile_page').css({'--bg':'url("'+t_Bg.src+'")'});$('.profile_animated_background > video').attr({'width':0});$('.profile_animated_background > video').attr({'srctmp':''});g_IsAnimated=false;$('#profile_page').removeClass('has-anim');fn_UpdateProfile();$('.loading_background').css({'opacity':0});if(g_Bg_url.startsWith('http'))localStorage.setItem('bg',g_Bg_url);g_Bg_busy=false;};t_Bg.onerror=function()
{$('.profile_animated_background > video').attr({'srctmp':$('.profile_animated_background > video').attr('src')});$('.profile_animated_background > video').attr({'src':b64url});$('.profile_animated_background > video').attr({'srcurl':_url});}
t_Bg.src=b64url;}
function fn_UpdateProfile()
{let marg;if($('.profile_customization_area .profile_customization')[0])marg=12;else marg=0;$('#resizing-area').css({'transition-duration':'0s'});if($('#resizing-area').height()<$('#sorting-area').height()+marg)
$('#resizing-area').height($('#sorting-area').height()+marg);if(g_ShrinkingTimeout!=null)clearTimeout(g_ShrinkingTimeout);if(!$('.showcase_resizer.active')[0])g_ShrinkingTimeout=setTimeout(function(){$('#resizing-area').css({'transition-duration':'0.7s'});$('#resizing-area').height($('#sorting-area').height()+marg);},g_ResizeTimeDelay);fn_UpdateCanvases();}
function fn_UpdateCanvases()
{let top_off=$('#profile_page').offset().top;$(g_IsAnimated?'.profile_customization_area .profile_customization:not(.non-anim .ui-sortable-helper) .row:not(.hidden) canvas':'.profile_customization_area .profile_customization .row:not(.hidden .refuse) canvas').each((i,e)=>{const el=$(e);const side=el.hasClass('has-side');let h_context=el[0].getContext('2d');h_context.canvas.width=el.width();h_context.canvas.height=el.height();h_context.fillStyle='black';let thick=parseInt(el.css('border-left-width'));h_context.fillRect(0,0,h_context.canvas.width,h_context.canvas.height);if(g_Bg)
{if(g_IsAnimated)h_context.drawImage(g_Bg,0,0,g_VideoWidth,g_VideoHeight,-fn_FromCenter(el)-thick,-el.offset().top-thick+top_off,1920,$('video')[0].height);else h_context.drawImage(g_Bg,-fn_FromCenter(el)-thick,-el.offset().top-thick+top_off);}
if(side){h_context.fillRect(100,0,9,h_context.canvas.height),h_context.clearRect(101,0,7,h_context.canvas.height);if(el.hasClass('has-box'))h_context.fillRect(0,h_context.canvas.height-70,101,70),h_context.fillStyle="#222223",h_context.fillRect(0,h_context.canvas.height-57,100,57),h_context.clearRect(0,h_context.canvas.height-69,101,11);}});$('.profile_customization_area .profile_customization.refuse .row:not(.hidden) canvas').each((i,e)=>{let h_context=$(e)[0].getContext('2d');h_context.clearRect(0,0,h_context.canvas.width,h_context.canvas.height);});}
function fn_LoadPreview(index)
{if($(`#${index}`).hasClass('refuse'))
{$(`#${index}`).removeClass('refuse');$(`#${index} .wd1`).css({'background-image':'none'});fn_UpdateProfile();}
else{$(`#${index} .image-in`).trigger('click');}}
function fn_AddShowcase(ind_)
{const index=ind_[1];const order=ind_[0];let leveled=[3,4,8,9];let not_resizable=[8,9,11,12];$($('.showcase-container .profile_customization')[index]).clone(true).attr('id',g_GlobalID).appendTo('.profile_customization_area');if(!not_resizable.includes(index))
{if(leveled.includes(index))for(let i=1;i<((index==4)?5:4);i++)
$('<div/>',{id:'r'+i+'-'+g_GlobalID,class:'showcase_resizer stable',leveled:leveled.includes(index)}).bind('mousedown',function(){$(this).removeClass('stable');$(this).addClass('active');}).prependTo('.profile_content');else
$('<div/>',{id:'r0-'+g_GlobalID,class:'showcase_resizer stable'}).bind('mousedown',function(){$(this).removeClass('stable');$(this).addClass('active');}).prependTo('.profile_content');}
$('#'+g_GlobalID+' .image-in').attr({'d-id':g_GlobalID});$('#'+g_GlobalID+' .btn-moveload').attr({'d-id':g_GlobalID}).click((e)=>{fn_LoadPreview(parseInt($(e.target).attr('d-id')));});$('#'+g_GlobalID+' .btn-movegear').attr({'d-id':g_GlobalID}).click((e)=>{fn_DisplayMenu(parseInt($(e.target).attr('d-id')));});$('#'+g_GlobalID+' .btn-moveremove').attr({'d-id':g_GlobalID}).click((e)=>{for(let i=0;i<5;i++)$('#r'+i+'-'+$(e.target).attr('d-id')).remove(),$(`#${$(e.target).attr('d-id')}`).remove(),fn_UpdateProfile();});return fn_UpdateProfile(),$('#'+(g_GlobalID++));}
function fn_ExportGraphics(query,do_avatar,format)
{$('.loading_background').css({'opacity':1,'pointer-events':'unset'});let zip=new JSZip();if(do_avatar&&!g_IsAnimated)
{zip.file(`avatar.${g_Extension}`,fn_PreModify(-1,$('.steam_avatar')[0].toDataURL(format).split(',')[1],g_Format),{base64:true});}
$(query).each((i,e)=>{$(e).find('.row:not(.hidden) canvas').each((i2,e2)=>{zip.file((do_avatar?`#${($(e).index()+1)} (${g_Showcases[$(e).attr('d-id')][1]})/`:'')+`${$(e2).attr('title')}.${g_Extension}`,fn_PreModify(parseInt($(e).attr('d-id')),e2.toDataURL(format).split(',')[1],g_Format),{base64:true});});});zip.generateAsync({type:'blob'}).then(function(blob){saveAs(blob,'Cropper_'+Date.now().toString(36)+'.zip');$('.loading_background').css({'opacity':0});});}
async function fn_ConvertAnimated(query,non_only)
{let time_start,time_end;time_start=performance.now();const gabls=$(query);if(!gabls.length)return false;$('.loading_background').css({'opacity':1,'pointer-events':'unset'});let zip=new JSZip();if(!g_FFmpeg.isLoaded())await g_FFmpeg.load();g_FFmpeg.FS('writeFile','input',await fetchFile($('video')[0].src));let i=0;const iter=async function()
{let canvs=$(gabls[i]).find('.row:not(.hidden) canvas');let j=0;const iter2=async function(ind)
{let canv=$(canvs[j]);let top_off=$('#profile_page').offset().top;let x=fn_FromCenter(canv);let y=canv.offset().top-top_off;let w=canv.width();let h=canv.height();let pw=w;let ph=h;let ph2=Math.floor(ph/2)*2;h=Math.max(0,h-Math.max(0,(y+h)-g_Bg.height));let vf=`[0:v]scale=1920:-1,crop=${w}:${h}:${x}:${y},pad=width=${pw}:height=${ph}:x=0:y=0:color=black`;let params=['-i','input','-row-mt','1','-filter_complex',vf];if(canv.hasClass('has-side'))
{const barfill=$('#fake_bar_fill')[0].getContext('2d');barfill.fillStyle="#000000";barfill.clearRect(0,0,1000,2000);const barmask=$('#fake_bar_mask')[0].getContext('2d');barmask.fillStyle="#000000";barmask.fillRect(0,0,1000,2000);barfill.fillRect(100,0,9,2000);barmask.clearRect(101,0,7,2000);if(canv.hasClass('has-box'))
{barfill.fillRect(0,ph2-70,100,70);barfill.fillStyle="#222223";barfill.fillRect(0,ph2-57,100,57);barmask.clearRect(0,ph2-69,101,11);}
vf+=`[bar0];[bar0][1:v]overlay=0:0[bar1];[2:v]crop=506:${ph2}:0:0,alphaextract[alf];[bar1][alf]alphamerge`;params=['-i','input','-i','barfill','-loop','1','-i','barmask','-row-mt','1','-filter_complex',vf];g_FFmpeg.FS('writeFile','barfill',await fetchFile($('#fake_bar_fill')[0].toDataURL()));g_FFmpeg.FS('writeFile','barmask',await fetchFile($('#fake_bar_mask')[0].toDataURL()));}
switch(g_ExtensionAnimated)
{case 'gif':{if(g_QualityAnimated)params[params.length-1]+=`[inn];[inn]split[s0][s1];[s0]palettegen=stats_mode=full:max_colors=${Math.floor(256*g_QualityAnimated/100)}:reserve_transparent=on[p];[s1][p]paletteuse=dither=bayer`
if(g_FramerateAnimated)params.push('-r',g_FramerateAnimated.toString());params.push('-loop','0');break;}
case 'png':{if(g_QualityAnimated)
{if(g_QualityAnimated<=50)
{params.push('-pix_fmt','pal8');}
params.push('-compression_level',(100*((150-g_QualityAnimated)%50)/40).toString());}
if(g_FramerateAnimated)params.push('-r',g_FramerateAnimated.toString());params.push('-plays','0');break;}
case 'webp':{if(g_QualityAnimated)params.push('-quality',g_QualityAnimated.toString());if(g_FramerateAnimated)params.push('-r',g_FramerateAnimated.toString());params.push('-loop','0','-lossless','0');break;}
case 'webm':{if(g_QualityAnimated)params.push('-crf',Math.round(51*(100-g_QualityAnimated)/100).toString());if(g_FramerateAnimated)params.push('-r',g_FramerateAnimated.toString());break;}
case 'mp4':{if(g_QualityAnimated)params.push('-crf',Math.round(51*(100-g_QualityAnimated)/100).toString());if(g_FramerateAnimated)params.push('-r',g_FramerateAnimated.toString());break;}}
params.push('out.'+(g_ExtensionAnimated=='png'?'apng':g_ExtensionAnimated));await g_FFmpeg.run.apply(this,params);const output=await g_FFmpeg.FS('readFile','out.'+(g_ExtensionAnimated=='png'?'apng':g_ExtensionAnimated));let base64out='';let array_=new Uint8Array(output.buffer);array_.forEach((e,i_)=>{base64out+=String.fromCharCode(e);});await zip.file((non_only?`#${($(gabls[ind]).index()+1)} (${g_Showcases[$(gabls[ind]).attr('d-id')][1]})/`:'')+`${canv.attr('title')}.${g_ExtensionAnimated}`,fn_PreModify(parseInt($(gabls[i]).attr('d-id')),btoa(base64out),g_FormatAnimated),{base64:true});j++;if(j<canvs.length)await iter2(ind);}
await iter2(i);i++;if(i<gabls.length)await iter();}
await iter();zip.generateAsync({type:'blob'}).then(function(blob){saveAs(blob,'Cropper_Anim_'+Date.now().toString(36)+'.zip');time_end=performance.now();console.log(`Done! Took ${(time_end-time_start)/1000} seconds.`);$('.loading_background').css({'opacity':0});});return true;}
function fn_DisplayMenu(index)
{const show_changes=function()
{$('.menu-background').append($('<div/>').addClass('menu-window').mousedown(e=>{e.stopPropagation();}));let build='';build+=`<div class="menu-label">${tl.cropperChangelog}</div><br/>
			<div class="menu-donate-description">`;for(const el of g_ChangeLog)
{build+=`<span class="menu-label menu-changelog-title">${el[0]} <span style="font-size:12px">(${el[1]})</span></span><span class="menu-changelog-description">${el[2].replace(/\n/g,'<div style="height:12px"></div>')}</span><br/><br/><br/>`;}
build+=`</div>
			<br/>
			<button class="menu-button" onclick="fn_DisplayMenu(-1)">${tl.cropperModalClose}</button>
			</div>`;$('.menu-window').append($(build));$('.menu-background').css({display:'flex'});$('.menu-background').animate({opacity:1,'padding-top':0},300);};const show_donate=function()
{$('.menu-background').append($('<div/>').addClass('menu-window').mousedown(e=>{e.stopPropagation();}));$('.menu-window').append($(`
			
			
			<div class="menu-label">Send a Donation</div><br/>
			
			<div class="menu-donate-description">To be finished...</div>

			<br/><br/>
			<button class="menu-button btn-donate" onclick="window.open('/donators/donate', '_blank').focus()">Send a donation!</button> <button class="menu-button" onclick="fn_DisplayMenu(-1)">Close</button>
			</div>
		`));$('.menu-background').css({display:'flex'});$('.menu-background').animate({opacity:1,'padding-top':0},300);}
const show_upload=function()
{$('.menu-background').append($('<div/>').addClass('menu-window').mousedown(e=>{e.stopPropagation();}));$('.menu-window').append($(`
			<div class="menu-label">${tl.cropperUploadCodes}</div><br/>
			${tl.cropperCodesDescription}<br/><br/>
			
			<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=748624905">${tl.cropperCodesLabel1}</a><br/>
			<input class="menu-code" type="text" readonly value=
			"$J(&apos;#image_width&apos;).val(1000).attr(&apos;id&apos;,&apos;&apos;),$J(&apos;#image_height&apos;).val(1).attr(&apos;id&apos;,&apos;&apos;);"
			/><br/><br/>
			
			<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=748624905">${tl.cropperCodesLabel2}</a><br/>
			<input class="menu-code" type="text" readonly value=
			"$J(&apos;#image_width&apos;).val(1000).attr(&apos;id&apos;,&apos;&apos;),$J(&apos;#image_height&apos;).val(1).attr(&apos;id&apos;,&apos;&apos;),$J(&apos;[name=file_type]&apos;).val(5);"
			/><br/><br/>
			
			<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2174159512">${tl.cropperCodesLabel3}</a><br/>
			<input class="menu-code" type="text" readonly value=
			"$J(&apos;[name=consumer_app_id]&apos;).val(480);$J(&apos;[name=file_type]&apos;).val(0);$J(&apos;[name=visibility]&apos;).val(0);"
			/><br/><br/>
			
			<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2174159512">${tl.cropperCodesLabel4}</a><br/>
			<input class="menu-code" type="text" readonly value=
			"$J(&apos;[name=consumer_app_id]&apos;).val(767);$J(&apos;[name=file_type]&apos;).val(9);$J(&apos;[name=visibility]&apos;).val(0);"
			/><br/><br/>
			
			<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2184191755">${tl.cropperCodesLabel5}</a><br/>
			<input class="menu-code" type="text" readonly value=
			"v_trim=_=&gt;{return _},$J(&apos;#title&apos;).val(&apos; \n&apos;+Array.from(Array(126),_=&gt;&apos;\t&apos;).join(&apos;&apos;));"
			/><br/><br/>
			
			<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2184191755">${tl.cropperCodesLabel6}</a><br/>
			<input class="menu-code" type="text" readonly value=
			"v_trim=_=&gt;{return _},$J(&apos;#title&apos;).val(&apos; \n&apos;+Array.from(Array(126),_=&gt;&apos;\t&apos;).join(&apos;&apos;)),$J(&apos;[name=file_type]&apos;).val(5);"
			/><br/><br/>
			
			<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2184191755">${tl.cropperCodesLabel7}</a><br/>
			<input class="menu-code" type="text" readonly value=
			"$J(&apos;.caption_quotebox&apos;).append(&apos;&lt;input type=&quot;hidden&quot;id=&quot;title&quot;name=&quot;title&quot;/&gt;&apos;);v_trim=_=&gt;{return _},$J(&apos;#title&apos;).val(&apos; \n&apos;+Array.from(Array(126),()=&gt;&apos;\t&apos;).join(&apos;&apos;));"
			/><br/><br/>
			
			${tl.cropperCodesLabel8}<br/>
			<input class="menu-code" type="text" readonly value=
			"for /r %f in (*) do ffmpeg -loop 1 -i &#x22;%f&#x22; -c:v libx264 -t 1 -pix_fmt yuv420p -vf scale=1440:1080 &#x22;%f.mp4&#x22;"
			/><br/><br/>
			
			${tl.cropperCodesLabel9}<br/>
			<input class="menu-code" type="text" readonly value=
			"for /r %%f in (*) do ffmpeg -loop 1 -i &#x22;%%f&#x22; -c:v libx264 -t 1 -pix_fmt yuv420p -vf scale=1440:1080 &#x22;%%f.mp4&#x22;"
			/><br/><br/>
			
			<button class="menu-button" onclick="fn_DisplayMenu(-1)">${tl.cropperModalClose}</button>
		`));$('.menu-code').attr({'title':tl.cropperCodesClickToCopy}).focus(e=>{$(e.target).select();document.execCommand("copy");});$('.menu-background').css({display:'flex'});$('.menu-background').animate({opacity:1,'padding-top':0},300);};const show_add=function(){$('.menu-background').append($('<div/>').addClass('menu-window').mousedown(e=>{e.stopPropagation();}));$('.menu-window').append($(`
			<div style="display:flex;">
			
			<div>
			<div class="menu-label">${tl.cropperModalAddTitle}</div><br/>
			<select class="menu-showcases-dropdown">
			</select>
			<br/><br/>
			<button class="menu-button" onclick="fn_AddShowcase(JSON.parse($('.menu-showcases-dropdown').val())),fn_DisplayMenu(-1)">${tl.cropperModalAddButton1}</button> <button class="menu-button" onclick="fn_DisplayMenu(-1)">${tl.cropperModalAddButton2}</button>
			</div>
			
			<div class="menu-showcase-preview-outer">
			
			<div class="menu-showcase-preview-inner"><div class="menu-showcase-preview"></div></div>
			
			</div>
			
			</div>
		`));{let i_=0;g_Showcases.forEach((e,i)=>{if(!e[0])return;$('.menu-showcases-dropdown').append('<option class="menu-option" value="['+i_+','+i+']">'+e[1]+'</option>');++i_;});}
$($('.showcase-container .profile_customization')[0]).clone().appendTo('.menu-showcase-preview');$('.menu-showcases-dropdown').change(e=>{$('.menu-showcase-preview').empty();$($('.showcase-container .profile_customization')[JSON.parse($(e.target).val())[1]]).clone().appendTo('.menu-showcase-preview');});$('.menu-background').css({display:'flex'});$('.menu-background').animate({opacity:1,'padding-top':0},300);};const show_global=function()
{$('.menu-background').append($('<div/>').addClass('menu-window').mousedown(e=>{e.stopPropagation();}));$('.menu-window').append($(`
			<div class="menu-label">${tl.cropperModalSettingsTitle}</div><br/>
			
			<label><input class="menu-premodify" type="checkbox" ${(()=>{if(g_PreModify)return'checked';return'';})()} /> ${tl.cropperModalSettingsOption1}</label>
			<br/><br/>
			
			<hr></hr><br/>

			${tl.cropperModalSettingsOption2}<br/>
			<select class="menu-showcases-dropdown menu-extension">
			<option value="0" ${(()=>{if(g_Extension=='png')return'selected';return'';})()}>PNG</option>
			<option value="1" ${(()=>{if(g_Extension=='jpg')return'selected';return'';})()}>JPEG</option>
			</select>
			<br/><br/>
			
			<hr></hr><br/>

			${tl.cropperModalSettingsOption3}<br/>
			<select class="menu-showcases-dropdown menu-extension-animated">
			<option value="0" ${(()=>{if(g_ExtensionAnimated=='gif')return'selected';return'';})()}>GIF</option>
			<option value="1" ${(()=>{if(g_ExtensionAnimated=='png')return'selected';return'';})()}>APNG</option>
			<option value="2" ${(()=>{if(g_ExtensionAnimated=='webp')return'selected';return'';})()}>WEBP</option>
			<option value="4" ${(()=>{if(g_ExtensionAnimated=='webm')return'selected';return'';})()}>WEBM</option>
			<option value="3" ${(()=>{if(g_ExtensionAnimated=='mp4')return'selected';return'';})()}>MP4</option>
			</select>
			<br/><br/>

			${tl.cropperModalSettingsOption4}<br/>
			<select class="menu-showcases-dropdown menu-framerate-animated">
			<option value="0" ${(()=>{if(g_FramerateAnimated==0)return'selected';return'';})()}>${tl.cropperModalSettingsDropboxFramerate}</option>
			<option value="10" ${(()=>{if(g_FramerateAnimated==10)return'selected';return'';})()}>10 FPS</option>
			<option value="15" ${(()=>{if(g_FramerateAnimated==15)return'selected';return'';})()}>15 FPS</option>
			<option value="24" ${(()=>{if(g_FramerateAnimated==24)return'selected';return'';})()}>24 FPS</option>
			<option value="30" ${(()=>{if(g_FramerateAnimated==30)return'selected';return'';})()}>30 FPS</option>
			<option value="48" ${(()=>{if(g_FramerateAnimated==48)return'selected';return'';})()}>48 FPS</option>
			<option value="50" ${(()=>{if(g_FramerateAnimated==50)return'selected';return'';})()}>50 FPS</option>
			<option value="60" ${(()=>{if(g_FramerateAnimated==60)return'selected';return'';})()}>60 FPS</option>
			</select>
			<br/><br/>

			${tl.cropperModalSettingsOption5}<br/>
			<select class="menu-showcases-dropdown menu-quality-animated">
			<option value="0" ${(()=>{if(g_QualityAnimated==0)return'selected';return'';})()}>${tl.cropperModalSettingsDropboxQuality}</option>
			<option value="10" ${(()=>{if(g_QualityAnimated==10)return'selected';return'';})()}>10%</option>
			<option value="20" ${(()=>{if(g_QualityAnimated==20)return'selected';return'';})()}>20%</option>
			<option value="30" ${(()=>{if(g_QualityAnimated==30)return'selected';return'';})()}>30%</option>
			<option value="40" ${(()=>{if(g_QualityAnimated==40)return'selected';return'';})()}>40%</option>
			<option value="50" ${(()=>{if(g_QualityAnimated==50)return'selected';return'';})()}>50%</option>
			<option value="60" ${(()=>{if(g_QualityAnimated==60)return'selected';return'';})()}>60%</option>
			<option value="70" ${(()=>{if(g_QualityAnimated==70)return'selected';return'';})()}>70%</option>
			<option value="80" ${(()=>{if(g_QualityAnimated==80)return'selected';return'';})()}>80%</option>
			<option value="90" ${(()=>{if(g_QualityAnimated==90)return'selected';return'';})()}>90%</option>
			<option value="100" ${(()=>{if(g_QualityAnimated==100)return'selected';return'';})()}>100%</option>
			</select>
			<br/><br/>

			<hr></hr><br/>

			<label><input class="menu-refresh" type="checkbox" ${(()=>{if(g_RefreshAnimated)return'checked';return'';})()} /> ${tl.cropperModalSettingsOption6}</label>
			<br/><br/>
			
			${tl.cropperModalSettingsOption7}<br/>
			<select class="menu-showcases-dropdown menu-framerate">
			<option value="5" ${(()=>{if(g_RefreshRate==5)return'selected';return'';})()}>${tl.cropperModalSettingsDropboxPreview1}</option>
			<option value="15" ${(()=>{if(g_RefreshRate==15)return'selected';return'';})()}>${tl.cropperModalSettingsDropboxPreview2}</option>
			<option value="30" ${(()=>{if(g_RefreshRate==30)return'selected';return'';})()}>${tl.cropperModalSettingsDropboxPreview3}</option>
			<option value="60" ${(()=>{if(g_RefreshRate==60)return'selected';return'';})()}>${tl.cropperModalSettingsDropboxPreview4}</option>
			</select>
			<br/><br/>
			
			<br/><button class="menu-button" onclick="fn_DisplayMenu(-1)">${tl.cropperModalClose}</button>
			`));$('.menu-extension').change((e)=>{switch(parseInt($(e.target).val()))
{case 0:{g_Format='image/png';g_Extension='png';break;}
case 1:{g_Format='image/jpeg';g_Extension='jpg';break;}}});$('.menu-extension-animated').change((e)=>{switch(parseInt($(e.target).val()))
{case 0:{g_FormatAnimated='image/gif';g_ExtensionAnimated='gif';break;}
case 1:{g_FormatAnimated='image/png';g_ExtensionAnimated='png';break;}
case 2:{g_FormatAnimated='image/webp';g_ExtensionAnimated='webp';break;}
case 3:{g_FormatAnimated='video/mp4';g_ExtensionAnimated='mp4';break;}
case 4:{g_FormatAnimated='video/webm';g_ExtensionAnimated='webm';break;}}});$('.menu-framerate').change((e)=>{clearInterval(g_AnimatedTimer);g_RefreshRate=parseInt($(e.target).val());if(g_IsAnimated)g_AnimatedTimer=setInterval(()=>{if(g_RefreshAnimated)fn_UpdateCanvases()},1000/g_RefreshRate);});$('.menu-framerate-animated').change((e)=>{g_FramerateAnimated=parseInt($(e.target).val());});$('.menu-quality-animated').change((e)=>{g_QualityAnimated=parseInt($(e.target).val());});$('.menu-premodify').change(e=>{g_PreModify=e.target.checked;});$('.menu-refresh').change(e=>{g_RefreshAnimated=e.target.checked;});$('.menu-background').css({display:'flex'});$('.menu-background').animate({opacity:1,'padding-top':0},300);};const show_settings=function()
{let type=parseInt($('#'+index).attr('d-id'));$('.menu-background').append($(`<div><span class="menu-label">${g_Showcases[type][1]}</span></div>`).addClass('menu-window').mousedown(e=>{e.stopPropagation();}));switch(type)
{case 0:{$('.menu-window').append(`
				<br/>
				<br/>
				${tl.cropperModalShowcaseHeight}<br/><input type="number" class="menu-input menu-height" d-id="${index}" value="${$('#'+index+' .wd1').height()}" min="1" step="1"/>
				<br/>
				<br/>
				<div ${($('#'+index).index()==0)?'':'class="hidden"'}>
					<button class="menu-button menu-fit-to-bg" d-id="${index}">${tl.cropperModalShowcaseFit}</button>
					<br/><br/>
				</div>
				<label>
					<input class="menu-title" d-id="${index}" type="checkbox" ${$('#'+index+' .screenshot_showcase_stats').hasClass('no-title')?'':'checked'}> ${tl.cropperModalShowcaseDisplayTitle}
				</label>
				<br/>
				<label>
					<input class="menu-rates" d-id="${index}" type="checkbox" ${$('#'+index+' .screenshot_showcase_stats').hasClass('no-rates')?'':'checked'}> ${tl.cropperModalShowcaseDisplayRates}
				</label>
				<br/>
				<br/>
				`);$('.menu-fit-to-bg').click(e=>{$('#'+$(e.target).attr('d-id')+' .wd1').height(Math.max(1,g_Bg.height-256));$('.menu-height').val($('#'+$(e.target).attr('d-id')+' .wd1').height());fn_UpdateProfile();});$('.menu-height').change(e=>{$('#'+$(e.target).attr('d-id')+' .wd1').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});$('.menu-title').change(e=>{if(e.target.checked)
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').removeClass('no-title');}
else
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').addClass('no-title');}
fn_UpdateProfile();});$('.menu-rates').change(e=>{if(e.target.checked)
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').removeClass('no-rates');}
else
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').addClass('no-rates');}
fn_UpdateProfile();});break;}
case 1:case 2:{$('.menu-window').append(`
				<br/>
				<br/>
				${tl.cropperModalShowcaseHeight}<br/><input type="number" class="menu-input menu-height" d-id="${index}" value="${$('#'+index+' .wd1').height()}" min="1" step="1"/>
				<br/>
				<br/>
				<div ${($('#'+index).index()==0)?'':'class="hidden"'}>
					<button class="menu-button menu-fit-to-bg" d-id="${index}">${tl.cropperModalShowcaseFit}</button>
					<br/><br/>
				</div>
				<label>
					<input class="menu-title" d-id="${index}" type="checkbox" ${$('#'+index+' .screenshot_showcase_stats').hasClass('no-title')?'':'checked'}> ${tl.cropperModalShowcaseDisplayTitle}
				</label>
				<br/>
				<label>
					<input class="menu-rates" d-id="${index}" type="checkbox" ${$('#'+index+' .screenshot_showcase_stats').hasClass('no-rates')?'':'checked'}> ${tl.cropperModalShowcaseDisplayRates}
				</label>
				<br/>
				<label>
					<input class="menu-plus" d-id="${index}" type="checkbox" ${$('#'+index+' .screenshot_showcase_stats').hasClass('has-plus')?'checked':''}> ${tl.cropperModalShowcaseDisplayCountbox}
				</label>
				<br/>
				<label>
					<input class="menu-side" d-id="${index}" type="checkbox" ${$('#'+index+' .wd1').hasClass('has-side')?'checked':''}> ${tl.cropperModalShowcaseSimulateSidebar}
				</label>
				<br/>
				<label>
					<input class="menu-box" d-id="${index}" type="checkbox" ${$('#'+index+' .wd1').hasClass('has-box')?'checked':''} ${$('#'+index+' .wd1').hasClass('has-side')?'':'disabled'}> ${tl.cropperModalShowcaseSimulateCountbox}
				</label>
				<br/>
				<br/>
				`);$('.menu-fit-to-bg').click(e=>{$('#'+$(e.target).attr('d-id')+' .wd1').height(Math.max($('#'+$(e.target).attr('d-id')+' .wd1').hasClass('has-box')?71:1,g_Bg.height-(type==2?301:256)));$('#'+$(e.target).attr('d-id')+' .wd2').height(Math.max(($('#'+$(e.target).attr('d-id')+' .wd1').hasClass('has-box')&&!$('#'+$(e.target).attr('d-id')+' .wd2').hasClass('has-plus'))?71:1,g_Bg.height-($('#'+$(e.target).attr('d-id')+' .wd2').hasClass('has-plus')?70:0)-(type==2?301:256)));$('.menu-height').val($('#'+$(e.target).attr('d-id')+' .wd1').height());fn_UpdateProfile();});$('.menu-height').change(e=>{$('#'+$(e.target).attr('d-id')+' .wd1').height(Math.min(2000,Math.max($('#'+$(e.target).attr('d-id')+' .wd1').hasClass('has-box')?71:1,parseInt($(e.target).val()))));$('#'+$(e.target).attr('d-id')+' .wd2').height(Math.min(2000,Math.max(($('#'+$(e.target).attr('d-id')+' .wd1').hasClass('has-box')&&!$('#'+$(e.target).attr('d-id')+' .wd2').hasClass('has-plus'))?71:1,parseInt($(e.target).val())-($('#'+$(e.target).attr('d-id')+' .wd2').hasClass('has-plus')?70:0))));fn_UpdateProfile();});$('.menu-title').change(e=>{if(e.target.checked)
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').removeClass('no-title');}
else
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').addClass('no-title');}
fn_UpdateProfile();});$('.menu-rates').change(e=>{if(e.target.checked)
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').removeClass('no-rates');}
else
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').addClass('no-rates');}
fn_UpdateProfile();});$('.menu-plus').change(e=>{if(e.target.checked)
{$('#'+$(e.target).attr('d-id')+' .wd2').addClass('has-plus');$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').addClass('has-plus');$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_plus').removeClass('hidden');}
else
{$('#'+$(e.target).attr('d-id')+' .wd2').removeClass('has-plus');$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').removeClass('has-plus');$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_plus').addClass('hidden');}
$('#'+$(e.target).attr('d-id')+' .wd2').height(Math.max(1,parseInt($('#'+$(e.target).attr('d-id')+' .wd1').height())-($('#'+$(e.target).attr('d-id')+' .wd2').hasClass('has-plus')?70:0)));fn_UpdateProfile();});$('.menu-side').change(e=>{if(e.target.checked)
$('#'+$(e.target).attr('d-id')+' .wd1').addClass('has-side'),$('.menu-box')[0].disabled=false;else
$('#'+$(e.target).attr('d-id')+' .wd1').removeClass('has-side'),$('.menu-box')[0].checked=false,$('.menu-box')[0].disabled=true,$('#'+$(e.target).attr('d-id')+' .wd1').removeClass('has-box');fn_UpdateProfile();});$('.menu-box').change(e=>{if(e.target.checked)
{$('#'+$(e.target).attr('d-id')+' .wd1').addClass('has-box');if($('#'+$(e.target).attr('d-id')+' .wd1').height()<71)
$('#'+$(e.target).attr('d-id')+' .wd1').height(71);if(!$('#'+$(e.target).attr('d-id')+' .wd2').hasClass('has-plus')&&$('#'+$(e.target).attr('d-id')+' .wd2').height()<71)
$('#'+$(e.target).attr('d-id')+' .wd2').height(71);}
else
$('#'+$(e.target).attr('d-id')+' .wd1').removeClass('has-box');fn_UpdateProfile();});break;}
case 3:{$('.menu-window').append(`
				<br/>
				<br/>
				${tl.cropperModalShowcaseLevel}
				<br/><select class="menu-showcases-dropdown" d-id="${index}">
					<option value="1" ${($('#'+index+' .row2').hasClass('hidden')&&$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>1</option>
					<option value="2" ${(!$('#'+index+' .row2').hasClass('hidden')&&$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>2</option>
					<option value="3" ${(!$('#'+index+' .row2').hasClass('hidden')&&!$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>3</option>
				</select>
				<br/>
				<br/>
				${tl.cropperModalShowcaseHeight}
				<br/>
				<div class="menu-input1"><input type="number" class="menu-input menu-height1" d-id="${index}" value="${$('#'+index+' .row1 .wd1').height()}" min="1" step="1"/><br/><br/></div>
				<div class="menu-input2 ${$('#'+index+' .row2').hasClass('hidden')?'hidden':''}"><input type="number" class="menu-input menu-height2" d-id="${index}" value="${$('#'+index+' .row2 .wd1').height()}" min="1" step="1"/><br/><br/></div>
				<div class="menu-input3 ${$('#'+index+' .row3').hasClass('hidden')?'hidden':''}"><input type="number" class="menu-input menu-height3" d-id="${index}" value="${$('#'+index+' .row3 .wd1').height()}" min="1" step="1"/><br/><br/></div>
				
				<div ${($('#'+index).index()==0)?'':'class="hidden"'}>
					<button class="menu-button menu-fit-to-bg" d-id="${index}">${tl.cropperModalShowcaseFit}</button>
					<br/><br/>
				</div>
				`);$('.menu-fit-to-bg').click(e=>{switch(parseInt($('.menu-showcases-dropdown').val()))
{case 1:{$('#'+$(e.target).attr('d-id')+' .row1 canvas').height(Math.max(1,g_Bg.height-380));break;}
case 2:{$('#'+$(e.target).attr('d-id')+' .row1 canvas').height(parseInt(Math.max(1,(g_Bg.height-9-380)/2)));$('#'+$(e.target).attr('d-id')+' .row2 canvas').height(parseInt(Math.max(1,((g_Bg.height-9-380)/2==parseInt((g_Bg.height-9-380)/2)?0:1)+(g_Bg.height-9-380)/2)));break;}
case 3:{$('#'+$(e.target).attr('d-id')+' .row1 canvas').height(parseInt(Math.max(1,(g_Bg.height-18-380)/3)));$('#'+$(e.target).attr('d-id')+' .row2 canvas').height(parseInt(Math.max(1,((((g_Bg.height-18-380)/3%1).toFixed(1)=='0.7')?1:0)+(g_Bg.height-18-380)/3)));$('#'+$(e.target).attr('d-id')+' .row3 canvas').height(parseInt(Math.max(1,((((g_Bg.height-18-380)/3%1).toFixed(1)!='0.0')?1:0)+(g_Bg.height-18-380)/3)));break;}}
$('.menu-height1').val($('#'+$(e.target).attr('d-id')+' .row1 .wd1').height());$('.menu-height2').val($('#'+$(e.target).attr('d-id')+' .row2 .wd1').height());$('.menu-height3').val($('#'+$(e.target).attr('d-id')+' .row3 .wd1').height());fn_UpdateProfile();});$('.menu-showcases-dropdown').change(e=>{if($(e.target).val()>=2)
$('#'+$(e.target).attr('d-id')+' .row2').removeClass('hidden'),$('.menu-input2').removeClass('hidden');else
$('#'+$(e.target).attr('d-id')+' .row2').addClass('hidden'),$('.menu-input2').addClass('hidden');if($(e.target).val()>=3)
$('#'+$(e.target).attr('d-id')+' .row3').removeClass('hidden'),$('.menu-input3').removeClass('hidden');else
$('#'+$(e.target).attr('d-id')+' .row3').addClass('hidden'),$('.menu-input3').addClass('hidden');});$('.menu-height1').change(e=>{$('#'+$(e.target).attr('d-id')+' .row1 canvas').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});$('.menu-height2').change(e=>{$('#'+$(e.target).attr('d-id')+' .row2 canvas').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});$('.menu-height3').change(e=>{$('#'+$(e.target).attr('d-id')+' .row3 canvas').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});break;}
case 4:{$('.menu-window').append(`
				<br/>
				<br/>
				${tl.cropperModalShowcaseLevel}
				<br/><select class="menu-showcases-dropdown" d-id="${index}">
					<option value="1" ${($('#'+index+' .row3').hasClass('hidden')&&$('#'+index+' .row4').hasClass('hidden'))?'selected':''}>1</option>
					<option value="2" ${(!$('#'+index+' .row3').hasClass('hidden')&&$('#'+index+' .row4').hasClass('hidden'))?'selected':''}>2</option>
					<option value="3" ${(!$('#'+index+' .row3').hasClass('hidden')&&!$('#'+index+' .row4').hasClass('hidden'))?'selected':''}>3</option>
				</select>
				<br/>
				<br/>
				${tl.cropperModalShowcaseHeight}
				<br/>
				
				<div class="menu-input1"><input type="number" class="menu-input menu-height1" d-id="${index}" value="${$('#'+index+' .row1 .wd1').height()}" min="1" step="1"/><br/><br/></div>
				
				<div class="menu-input2"><input type="number" class="menu-input menu-height2" d-id="${index}" value="${$('#'+index+' .row2 .wd1').height()}" min="1" step="1"/><br/><br/></div>
				
				<div class="menu-input3 ${$('#'+index+' .row3').hasClass('hidden')?'hidden':''}"><input type="number" class="menu-input menu-height3" d-id="${index}" value="${$('#'+index+' .row3 .wd1').height()}" min="1" step="1"/><br/><br/></div>
				
				<div class="menu-input4 ${$('#'+index+' .row4').hasClass('hidden')?'hidden':''}"><input type="number" class="menu-input menu-height4" d-id="${index}" value="${$('#'+index+' .row4 .wd1').height()}" min="1" step="1"/><br/><br/></div>
				`);$('.menu-fit-to-bg').click(e=>{switch(parseInt($('.menu-showcases-dropdown').val()))
{case 1:{$('#'+$(e.target).attr('d-id')+' .row1 canvas').height(Math.max(1,g_Bg.height-380));break;}
case 2:{$('#'+$(e.target).attr('d-id')+' .row1 canvas').height(parseInt(Math.max(1,(g_Bg.height-9-380)/2)));$('#'+$(e.target).attr('d-id')+' .row2 canvas').height(parseInt(Math.max(1,((g_Bg.height-9-380)/2==parseInt((g_Bg.height-9-380)/2)?0:1)+(g_Bg.height-9-380)/2)));break;}
case 3:{$('#'+$(e.target).attr('d-id')+' .row1 canvas').height(parseInt(Math.max(1,(g_Bg.height-18-380)/3)));$('#'+$(e.target).attr('d-id')+' .row2 canvas').height(parseInt(Math.max(1,((((g_Bg.height-18-380)/3%1).toFixed(1)=='0.7')?1:0)+(g_Bg.height-18-380)/3)));$('#'+$(e.target).attr('d-id')+' .row3 canvas').height(parseInt(Math.max(1,((((g_Bg.height-18-380)/3%1).toFixed(1)!='0.0')?1:0)+(g_Bg.height-18-380)/3)));break;}}
$('.menu-height1').val($('#'+$(e.target).attr('d-id')+' .row1 .wd1').height());$('.menu-height2').val($('#'+$(e.target).attr('d-id')+' .row2 .wd1').height());$('.menu-height3').val($('#'+$(e.target).attr('d-id')+' .row3 .wd1').height());$('.menu-height4').val($('#'+$(e.target).attr('d-id')+' .row4 .wd1').height());fn_UpdateProfile();});$('.menu-showcases-dropdown').change(e=>{if($(e.target).val()>=2)
$('#'+$(e.target).attr('d-id')+' .row3').removeClass('hidden'),$('.menu-input3').removeClass('hidden');else
$('#'+$(e.target).attr('d-id')+' .row3').addClass('hidden'),$('.menu-input3').addClass('hidden');if($(e.target).val()>=3)
$('#'+$(e.target).attr('d-id')+' .row4').removeClass('hidden'),$('.menu-input4').removeClass('hidden');else
$('#'+$(e.target).attr('d-id')+' .row4').addClass('hidden'),$('.menu-input4').addClass('hidden');});$('.menu-height1').change(e=>{$('#'+$(e.target).attr('d-id')+' .row1 canvas').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});$('.menu-height2').change(e=>{$('#'+$(e.target).attr('d-id')+' .row2 canvas').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});$('.menu-height3').change(e=>{$('#'+$(e.target).attr('d-id')+' .row3 canvas').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});$('.menu-height4').change(e=>{$('#'+$(e.target).attr('d-id')+' .row4 canvas').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});break;}
case 5:case 6:{$('.menu-window').append(`
				<br/>
				<br/>
				${tl.cropperModalShowcaseHeight}<br/><input type="number" class="menu-input menu-height" d-id="${index}" value="${$('#'+index+' .wd1').height()}" min="1" step="1"/>
				
				<br/>
				<br/>
				`);$('.menu-height').change(e=>{$('#'+$(e.target).attr('d-id')+' .wd1').height(Math.min(2000,Math.max(1,parseInt($(e.target).val()))));fn_UpdateProfile();});break;}
case 8:{$('.menu-window').append(`
				<br/>
				<br/>
				${tl.cropperModalShowcaseLevel}
				<br/><select class="menu-showcases-dropdown" d-id="${index}">
					<option value="1" ${($('#'+index+' .row2').hasClass('hidden')&&$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>1</option>
					<option value="2" ${(!$('#'+index+' .row2').hasClass('hidden')&&$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>2</option>
					<option value="3" ${(!$('#'+index+' .row2').hasClass('hidden')&&!$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>3</option>
				</select>
				<br/>
				<br/>
				`);$('.menu-showcases-dropdown').change(e=>{if($(e.target).val()>=2)
$('#'+$(e.target).attr('d-id')+' .row2').removeClass('hidden'),$('.menu-input2').removeClass('hidden');else
$('#'+$(e.target).attr('d-id')+' .row2').addClass('hidden'),$('.menu-input2').addClass('hidden');if($(e.target).val()>=3)
$('#'+$(e.target).attr('d-id')+' .row3').removeClass('hidden'),$('.menu-input3').removeClass('hidden');else
$('#'+$(e.target).attr('d-id')+' .row3').addClass('hidden'),$('.menu-input3').addClass('hidden');});break;}
case 9:{$('.menu-window').append(`
				<br/>
				<br/>
				${tl.cropperModalShowcaseLevel}
				<br/><select class="menu-showcases-dropdown" d-id="${index}">
					<option value="1" ${($('#'+index+' .row2').hasClass('hidden')&&$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>1</option>
					<option value="2" ${(!$('#'+index+' .row2').hasClass('hidden')&&$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>2</option>
					<option value="3" ${(!$('#'+index+' .row2').hasClass('hidden')&&!$('#'+index+' .row3').hasClass('hidden'))?'selected':''}>3</option>
				</select>
				<br/>
				<br/>
				`);$('.menu-showcases-dropdown').change(e=>{if($(e.target).val()>=2)
$('#'+$(e.target).attr('d-id')+' .row2').removeClass('hidden'),$('.menu-input2').removeClass('hidden');else
$('#'+$(e.target).attr('d-id')+' .row2').addClass('hidden'),$('.menu-input2').addClass('hidden');if($(e.target).val()>=3)
$('#'+$(e.target).attr('d-id')+' .row3').removeClass('hidden'),$('.menu-input3').removeClass('hidden');else
$('#'+$(e.target).attr('d-id')+' .row3').addClass('hidden'),$('.menu-input3').addClass('hidden');});break;}
case 10:{$('.menu-window').append(`
				<br/>
				<br/>
				<label><input d-id="${index}" class="menu-check1" type="checkbox" ${$('#'+index+' .favgame_info_stats').hasClass('has_bad')?'checked':''} />${tl.cropperModalShowcaseShowBadge}</label/><br/>
				<label><input d-id="${index}" class="menu-check2" type="checkbox" ${$('#'+index+' .favgame_info_stats').hasClass('has_ach')?'checked':''} />${tl.cropperModalShowcaseShowAchievement}</label/><br/>
				<label><input d-id="${index}" class="menu-check3" type="checkbox" ${$('#'+index+' .favgame_info_stats').hasClass('has_ugc')?'checked':''} />${tl.cropperModalShowcaseShowPublished}</label/><br/>
				<br/>
				`);$('.menu-check1').change(e=>{if(e.target.checked)
$('#'+$(e.target).attr('d-id')+' .favgame_info_stats').addClass('has_bad');else
$('#'+$(e.target).attr('d-id')+' .favgame_info_stats').removeClass('has_bad');fn_UpdateProfile();});$('.menu-check2').change(e=>{if(e.target.checked)
$('#'+$(e.target).attr('d-id')+' .favgame_info_stats').addClass('has_ach');else
$('#'+$(e.target).attr('d-id')+' .favgame_info_stats').removeClass('has_ach');fn_UpdateProfile();});$('.menu-check3').change(e=>{if(e.target.checked)
$('#'+$(e.target).attr('d-id')+' .favgame_info_stats').addClass('has_ugc');else
$('#'+$(e.target).attr('d-id')+' .favgame_info_stats').removeClass('has_ugc');fn_UpdateProfile();});break;}
case 11:{$('.menu-window').append(`
				<br/>
				<br/>
				${tl.cropperModalShowcaseNothing}
				<br/>
				<br/>
				`);break;}
case 12:{$('.menu-window').append(`
				<br/>
				<br/>
				<label>
					<input class="menu-title" d-id="${index}" type="checkbox" ${$('#'+index+' .screenshot_showcase_stats').hasClass('no-title')?'':'checked'}> ${tl.cropperModalShowcaseDisplayTitle}
				</label>
				<br/>
				<label>
					<input class="menu-rates" d-id="${index}" type="checkbox" ${$('#'+index+' .screenshot_showcase_stats').hasClass('no-rates')?'':'checked'}> ${tl.cropperModalShowcaseDisplayRates}
				</label>
				<br/>
				<br/>
				`);$('.menu-title').change(e=>{if(e.target.checked)
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').removeClass('no-title');}
else
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').addClass('no-title');}
fn_UpdateProfile();});$('.menu-rates').change(e=>{if(e.target.checked)
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').removeClass('no-rates');}
else
{$('#'+$(e.target).attr('d-id')+' .screenshot_showcase_stats').addClass('no-rates');}
fn_UpdateProfile();});break;}}
$('.menu-background').animate({opacity:1,'padding-top':0},g_ResizeTimeDuration);};switch(index)
{case(-7):{$('.menu-background').empty();show_changes();break;}
case(-6):{$('.menu-background').empty();show_donate();break;}
case(-4):{$('.menu-background').empty();show_upload();break;}
case(-3):{$('.menu-background').empty();show_global();break;}
case(-2):{$('.menu-background').empty();show_add();break;}
case(-1):{$('.menu-window').css({'pointer-events':'none'});$('.menu-background').animate({opacity:0,'padding-top':64},g_ResizeTimeDuration);break;}
default:{$('.menu-background').empty();show_settings();if(g_IsAnimated?($(`#${index} canvas`).length&&!$(`#${index}`).hasClass('non-anim')):($(`#${index} canvas`).length))
$('.menu-window').append(`<button class="menu-button" onclick="g_IsAnimated?fn_ConvertAnimated('#${index}', false):fn_ExportGraphics('#${index}', false, g_Format)">${tl.cropperModalShowcaseExport}</button> `);$('.menu-window').append(`<button class="menu-button" onclick="fn_DisplayMenu(-1)">${tl.cropperModalClose}</button>`);}}}
function fn_SetTheme(theme)
{$('#profile_wrapper_background').attr({'class':theme});}
function fn_SaveProfile()
{localStorage.settings=g_Format
+'|'+g_Extension
+'|'+g_RefreshRate
+'|'+g_PreModify
+'|'+g_RefreshAnimated
+'|'+g_FormatAnimated
+'|'+g_ExtensionAnimated
+'|'+g_QualityAnimated
+'|'+g_FramerateAnimated;}
async function fn_OnReady()
{const assign=(a,b)=>{if(typeof b=='undefined')return false;if(typeof b=='number'&&isNaN(b))return false;if(typeof b=='string')b='"'+b+'"';return eval(a+' = '+b);}
{if(localStorage.settings)
{const sett=localStorage.settings.split('|');assign('g_Format',sett[0]);assign('g_Extension',sett[1]);assign('g_RefreshRate',parseInt(sett[2]));assign('g_PreModify',JSON.parse(sett[3]));assign('g_RefreshAnimated',JSON.parse(sett[4]));assign('g_FormatAnimated',sett[5]);assign('g_ExtensionAnimated',sett[6]);assign('g_QualityAnimated',parseInt(sett[7]));assign('g_FramerateAnimated',parseInt(sett[8]));}}
fn_SaveProfile();$('#cropper_version').text(g_Version);g_FFmpeg=createFFmpeg({corePath:'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js',log:true});$("#sorting-area").sortable({start:function(e,ui){ui.placeholder.height(ui.item.height());ui.placeholder.css('visibility','visible');},stop:function(e,ui){$('#body-container').css({'position':'inherit'});fn_UpdateProfile();},change:fn_UpdateProfile,revert:300,scroll:false,distance:10});{let i_=0;for(let i=0;i<g_Showcases.length;++i)
{if(!g_Showcases[i][0])continue;$($('.showcase-container .profile_customization')[i]).attr({'d-id':i});++i_;}}
$(`<span class="btn-moveremove" title="${tl.cropperModalShowcaseDelete}"></span><span class="btn-moveload hidden" title="Set Custom Preview"></span><span class="btn-movegear" title="${tl.cropperModalShowcaseSettings}"></span>`).appendTo('.showcase-container .showcase-button-span');$('.profile_animated_background > video').on('loadeddata',(e)=>{$('.profile_animated_background > video').attr({'srctmp':''});$('#profile_page').addClass('has-anim');let e_=$(e.target);e_.removeAttr('width').removeAttr('height');g_Bg_url=$('.profile_animated_background > video').attr('srcurl');g_VideoWidth=e_.width();g_VideoHeight=e_.height();g_Bg=e_[0];g_Bg.width=1920;g_Bg.height=Math.round($(g_Bg).height());g_BgWidth=g_Bg.width;g_BgHeight=g_Bg.height;g_IsAnimated=true;fn_UpdateProfile();if(g_Bg_url.startsWith('http'))localStorage.setItem('bg',g_Bg_url);g_AnimatedTimer=setInterval(()=>{if(g_RefreshAnimated)fn_UpdateCanvases()},1000/g_RefreshRate);$('.loading_background').css({'opacity':0});g_Bg_busy=false;})
$('.profile_animated_background > video').on('error',(e)=>{console.error('Couldn\'t load the following background!');if(g_IsAnimated)$('.profile_animated_background > video').attr({'src':$('.profile_animated_background > video').attr('srctmp')});$('.loading_background').css({'opacity':0});g_Bg_busy=false;})
g_ConAvatar=$('.steam_avatar')[0].getContext('2d');g_ConAvatar.canvas.width=164;g_ConAvatar.canvas.height=164;if(window.location.hash)
{$('.input-bgurl').val(window.location.hash.slice(1));fn_SetBackground(window.location.hash.slice(1),false);}
else
{if(localStorage.getItem('bg')===null)
{const randbg=Math.floor(Math.random()*g_ExampleBgs.length);$('.input-bgurl').val(g_ExampleBgs[randbg]);fn_SetBackground(g_ExampleBgs[randbg],false);}
else
{$('.input-bgurl').val(localStorage.getItem('bg'));fn_SetBackground(localStorage.getItem('bg'),false);}}
window.addEventListener("hashchange",()=>{$('.input-bgurl').val(window.location.hash.slice(1));fn_SetBackground(window.location.hash.slice(1),false);},false);$('.input-bgurl').on('input',function(){if($(this).val().trim().length)fn_SetBackground($(this).val().trim(),false);});$('#custom-bg').change(e=>{const inurl=$('.input-bgurl');const infile=$('#custom-bg')[0];const allowed=['image/jpeg','image/png','video/webm','video/mp4'];if(infile.files.length){$('.loading_background').css({'opacity':1,'pointer-events':'unset'});const reader=new FileReader();const name=infile.files[0].name;reader.onload=()=>{fn_SetBackground(name,reader.result);}
$('.input-bgurl').val('');reader.readAsDataURL(infile.files[0]);}});$('.menu-background').mousedown(()=>{fn_DisplayMenu(-1)});$('.showcase_resizer').mousedown(function(){if(!$('.showcase_resizer.active')[0])fn_UpdateProfile();$(this).removeClass('stable');$(this).addClass('active');$('.resizer_preview').css({'display':'unset'});});$('body').mouseup(function(){if($('.showcase_resizer.active')[0]){$('.showcase_resizer.active').addClass('stable');$('.showcase_resizer.active').removeClass('active');$('.resizer_preview').css({'display':'none'});}
fn_UpdateProfile();fn_SaveProfile();});$('#global-container-inner').mousemove(function(e){if($('.ui-sortable-helper')[0])
{if($('.ui-sortable-helper').offset().top+$('.ui-sortable-helper').height()>=$('body').height()-$('#footer').outerHeight())
{$('#body-container').css({'position':'relative'});}
else
{$('#body-container').css({'position':'inherit'});}}
if($('.showcase_resizer.active')[0])
{let top_off=$('#profile_page').offset().top;let active=$('.showcase_resizer.active');let id_=$(active).attr('id').substr(3);let row_=$(active).attr('id').substr(1,1);active.css({'top':e.pageY-top_off-active.height()/2});let bottom_=active.offset().top;for(var i=1;i<=7;i++)
{let isplus_=$('#'+id_+' .wd'+i).hasClass('has-plus');let isbox_=$('#'+id_+' .wd'+i).hasClass('has-box');let up_;let addi;if(active.attr('leveled'))up_=$('#'+id_+' .row'+row_+' .wd1').offset().top,addi=parseInt($('#'+id_+' .row'+row_+' .wd1').css('border-top-width'))+parseInt($('#'+id_+' .row'+row_+' .wd1').css('border-bottom-width'));else up_=$('#'+id_+' .wd1').offset().top,addi=parseInt($('#'+id_+' .wd1').css('border-top-width'))+parseInt($('#'+id_+' .wd1').css('border-bottom-width'));if(bottom_-up_-addi<(isbox_?71:1))
{bottom_=up_+addi+(isbox_?71:1);}
if(bottom_-up_-addi>2000)
{bottom_=up_+addi+2000;}
if(i==1)$('.resizer_preview').css({'display':'block'}),$('.resizer_preview').css({'left':e.pageX,'top':e.pageY-top_off-48}),$('.resizer_preview_number').text(parseInt(bottom_-up_-addi));if(active.attr('leveled'))
{if(isplus_)$('#'+id_+' .row'+row_+' .wd'+i).css({'height':parseInt(bottom_-up_-addi-70)});else $('#'+id_+' .row'+row_+' .wd'+i).css({'height':parseInt(bottom_-up_-addi)});if(parseInt($('#'+id_+' .row'+row_+' .wd'+i).css('height'))<1)$('#'+id_+' .row'+row_+' .wd'+i).css({'height':1});}
else
{if(isplus_)$('#'+id_+' .wd'+i).css({'height':parseInt(bottom_-up_-addi-70)});else $('#'+id_+' .wd'+i).css({'height':parseInt(bottom_-up_-addi)});if(parseInt($('#'+id_+' .wd'+i).css('height'))<1)$('#'+id_+' .wd'+i).css({'height':1});}}
fn_UpdateProfile();}});$(`.image-in`).change((e)=>{const index=parseInt($(e.target).attr('d-id'));const reader=new FileReader();reader.onload=function(e)
{const img=new Image();img.onload=function()
{$(`#${index}`).addClass('refuse');const el=$(`#${index} .wd1`);const cv=el[0].getContext('2d');cv.clearRect(0,0,cv.canvas.width,cv.canvas.height);el.css({'background-image':`url(${img.src})`});if(img.width>630)
{let ratio=img.width/el.width();el.height(Math.round(img.height/ratio)).css({'background-size':el.width()});}
else
{el.height(Math.round(img.height)).css({'background-size':img.width});}
$(`#${index} form`)[0].reset();fn_UpdateProfile();};img.onerror=function()
{console.error('The selected file is not an image!');};img.src=e.target.result;};reader.onerror=function()
{console.error('An error has occured while loading a file!');}
reader.readAsDataURL($(`#${index} .image-in`)[0].files[0]);});$('#profile_page').css({'min-height':window.innerHeight-$('#footer').outerHeight()-$('#profile_page').offset().top});$(window).resize(e=>{$('#profile_page').css({'min-height':window.innerHeight-$('#footer').outerHeight()-$('#profile_page').offset().top});});setInterval(function()
{let top_off=$('#profile_page').offset().top;if($('.menu-background').css('opacity')==0)
$('.menu-background').css({'pointer-events':'none'});else
$('.menu-background').css({'pointer-events':'unset'});if($('.loading_background').css('opacity')==0)
$('.loading_background').css({'pointer-events':'none'});else
$('.loading_background').css({'pointer-events':'unset'});$('.showcase_resizer.stable').each((i,e)=>{let _e=$(e);_e.css({'top':'-99990px'});if($('.ui-sortable-helper')[0])return;let _id=$(e).attr('id').substr(3);let _row=$(e).attr('id').substr(1,1);let assigner;if(_e.attr('leveled'))
assigner=$('#'+_id+':not(.refuse) .row'+_row+':not(.hidden) .wd1');else
assigner=$('#'+_id+':not(.refuse) .wd1');if(assigner.length)_e.css({'left':(($('body').width-964)/2)+assigner.offset().left,'top':-top_off+assigner.offset().top+assigner.height()+parseInt(assigner.css('border-top-width'))+parseInt(assigner.css('border-bottom-width'))});});},50);}