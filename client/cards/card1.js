$('textarea').autogrow();

Template.card1.helpers({

  currency: function(){
    return 'AUX';
  }

});

Template.card1.events({

  'change #project-category': function(){

    var categoryValue = $('#project-category option:selected').val();
    var optionValues = []

    items = [
      {value: 'hello', text: 'hello'},
      {value: 'world', text: 'world'}
    ];

    /********************************************************************************

      In extreme laziness I ended up taking the code for the select boxes in the
      PPP and placed them into variables here. This raw HTML will then be used
      to populate the select options for the PPP prototype

    ********************************************************************************/

    optionValues[0] = '<select class="form-control" id="project-subcategory" name="skill_category"><option>Subcategory (Optional)</option></select>'
    optionValues[1] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="1">Build a Website</option><option value="2">Build an Online Store</option><option value="3">Get Traffic to my Website </option><option value="4">Write some Software</option><option value="5">Convert a Template to a Website</option><option value="53">Create a Wordpress Template</option><option value="54">Create a Joomla Template</option><option value="55">Create a Drupal Template</option><option value="56">Develop a Mac Application</option></select>'
    optionValues[2] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="6">Write an iPhone application</option><option value="7">Write an iPad application</option><option value="8">Write a Blackberry application</option><option value="9">Write an Android application</option><option value="57">Create a Mobile Website</option></select>'
    optionValues[3] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="10">Write some Articles</option><option value="11">Write a Book</option><option value="12">Write a Report</option><option value="13">Academic Writing</option><option value="14">Write a Technical Report </option><option value="15">Do some Blog Posting</option><option value="16">Translate Something </option><option value="17">Edit Something</option><option value="18">Proofread Something </option><option value="58">Write an eBook</option><option value="59">Rewrite some Articles for me</option><option value="60">Submit articles for me</option><option value="61">Write my Product Descriptions</option><option value="84">Write a tag line/slogan</option><option value="86">Content Writing</option></select>'
    optionValues[4] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="19">Design a Website Mockup</option><option value="20">Design a Banner</option><option value="21">Design a Logo</option><option value="22">Design in Flash</option><option value="23">Alter some Images</option><option value="24">Design some Icons</option><option value="25">Design some Business Cards</option><option value="26">Design some Stationery</option><option value="27">Develop a Corporate Identity</option><option value="28">Illustrate Something</option><option value="29">Create a Video  </option><option value="30">Design an Advertisement</option><option value="62">Design a T-Shirt</option><option value="63">Create Print and Packaging Designs</option><option value="64">Do some 3D Modelling</option><option value="65">Create an Animation</option><option value="66">Design a Facebook landing page</option><option value="67">Design a Twitter background</option><option value="79">I need some Graphic Design</option><option value="80">Design a Flyer</option><option value="81">Design a Brochure</option><option value="82">Design an App Mockup</option><option value="83">Design a Wordpress Mockup</option><option value="85">Design some Fashion</option><option value="98">Design a Tattoo</option><option value="99">Design a Powerpoint template</option></select>'
    optionValues[5] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="31">Submit some Articles</option><option value="32">Analyze some Data </option><option value="33">Fill in a Spreadsheet with Data</option><option value="34">Post some Advertisements</option><option value="35">Hire a Virtual Assistant </option><option value="36">Search the Web for Something</option><option value="68">Find Information from Websites</option><option value="69">Do some Excel Work</option><option value="70">Help with customer support</option></select>'
    optionValues[6] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="37">Design me a Product</option><option value="38">Find me a Manufacturer</option><option value="39">Find me a Buyer</option><option value="40">Find me a Supplier</option><option value="71">Manufacture a Product for me</option></select>'
    optionValues[7] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="41">Assist me with Bulk Marketing</option><option value="42">Telemarket for me </option><option value="43">Help me with Internet Marketing</option><option value="44">Find me some Leads</option><option value="45">Sell something for me</option><option value="46">Help me with Marketing</option><option value="72">Build Links to my Website</option><option value="73">SEO my Website</option><option value="74">Create/Manage a  PPC Campaign</option><option value="75">Build me a Twitter following</option><option value="87">Social Media Marketing</option><option value="88">Manage my Search Marketing</option></select>'
    optionValues[8] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="47">Write a Business Plan</option><option value="48">Find an Accountant</option><option value="49">Write a Contract</option><option value="50">Assist with Project Management </option><option value="51">Help with Recruitment</option><option value="52">Write a Patent </option><option value="77">Help with CRM</option><option value="78">Help with Business Finance</option></select>'
    optionValues[9] = '<select id="project-sub-category" name="skill_subcategory"><option>Select a job</option><option value="89">Pickup or Deliver Something</option><option value="90">Clean my House or Business</option><option value="91">Help me Move</option><option value="92">Help with Garden Maintenance</option><option value="93">Assemble some Furniture</option><option value="94">Help with my Computer/Laptop/Device</option><option value="95">Install Something at my Home</option><option value="96">Take some Photos</option><option value="97">Get Help from a Handyman</option><option value="110">General Labour</option></select>'

    if(categoryValue >= 1) {
      $('#project-subcategory').html(optionValues[categoryValue]);
    } else {
      $('#project-subcategory').html(optionValues[0]);
    }

    //Fill Subcategories with data
    // if(categoryValue >= 1) {
    //   $.each(items, function (i, item) {
    //     $('#project-subcategory').append($('<option>', {
    //         value: item.value,
    //         text : item.text
    //     }));
    //   });
    // }

    //Fade Subcategory Field based on selection
    if(categoryValue >= 1) {
      $('#project-subcategory').fadeTo("fast", 1);
    } else {
      $('#project-subcategory').fadeTo("fast", 0.2);
    }
  },

  'change #project-subcategory': function() {
    var projectName = $('#project-subcategory option:selected').text();
    $('#project-name').val(projectName);
    $('#project-description').focus();
  }

});
