jQuery(document).ready(function(){
    jQuery("a").click(function(){
        //jQuery("#zhb-title span").attr("class","fa fa-spinner fa-spin");
        jQuery("#zhb-title").html('<i class="fa fa-refresh fa-spin"></i>').delay(1000)
    })
})
