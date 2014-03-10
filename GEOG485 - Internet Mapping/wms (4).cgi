<?xml version='1.0' encoding="UTF-8" standalone="no" ?>
<!DOCTYPE WMT_MS_Capabilities SYSTEM "http://wms.jpl.nasa.gov/WMS_MS_Capabilities.dtd" [ <!ELEMENT VendorSpecificCapabilities EMPTY> ]>
<WMT_MS_Capabilities version="1.1.1">
<Service>
  <Name>OGC:WMS</Name>
  <Title>JPL Planetary Map Service</Title>
  <Abstract>Planetary WMS Server maintained by JPL, Mars</Abstract>
  <KeywordList>
    <Keyword>Mars</Keyword> <Keyword>MOC</Keyword>
    <Keyword>JPL</Keyword>
    <Keyword>Jet Propulsion Laboratory</Keyword>
    <Keyword>WMS</Keyword>
    <Keyword>SLD</Keyword>
  </KeywordList>
  <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://OnMars.jpl.nasa.gov" />
  <ContactInformation>
    <ContactPersonPrimary>
      <ContactPerson>Lucian Plesea</ContactPerson>
      <ContactOrganization>JPL</ContactOrganization>
    </ContactPersonPrimary>
    <ContactElectronicMailAddress>lucian.plesea@jpl.nasa.gov</ContactElectronicMailAddress>
  </ContactInformation>
  <Fees>none</Fees>
  <AccessConstraints>Server is load limited</AccessConstraints>
</Service>
<Capability>
  <Request>
   <GetTileService>
      <Format>text/xml</Format>
      <DCPType>
        <HTTP> <Get>
          <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://onmars.jpl.nasa.gov/wms.cgi?" />
        </Get> </HTTP>
      </DCPType>
    </GetTileService>
    <GetCapabilities>
      <Format>application/vnd.ogc.wms_xml</Format>
      <DCPType>
	<HTTP>
	  <Get>
	    <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://onmars.jpl.nasa.gov/wms.cgi?" />
	  </Get>
	</HTTP>
      </DCPType>
    </GetCapabilities>
    <GetMap>
	<Format>image/jpeg</Format>
	<Format>image/png</Format>
	<Format>image/tiff</Format>
	<Format>image/geotiff</Format>
      <DCPType>
	<HTTP>
	  <Get>
	    <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://onmars.jpl.nasa.gov/wms.cgi?" />
	  </Get>
	</HTTP>
      </DCPType>
    </GetMap>
  </Request>
  <Exception>
    <Format>application/vnd.ogc.se_xml</Format>
  </Exception>
  <VendorSpecificCapabilities />
  <UserDefinedSymbolization SupportSLD="1" UserLayer="0" UserStyle="1" RemoteWFS="0" />

  <Layer queryable="0">
    <Title>Planetary Web Map Server</Title>
    <SRS>IAU2000:49900</SRS>
    <SRS>EPSG:4326</SRS>
    <CRS>IAU2000:49900</CRS>
    <CRS>EPSG:4326</CRS>

    <Layer queryable="0">
      <Name>mola_slope</Name>
      <Title>Mars Slope</Title>
      <Abstract>
        Mars slope based on elevation from MOLA
      </Abstract>
      <LatLonBoundingBox minx="-180" miny="-90" maxx="180" maxy="90"/>
      <Style>
        <Name>default</Name>
        <Title>(default) Default style</Title>
      </Style>
      <Style>
        <Name>short_int</Name>
        <Title>Request PNG with this style to get short int data</Title>
      </Style>
      <ScaleHint min="10" max="10000"/>
      <MinScaleDenominator>100000</MinScaleDenominator>
    </Layer>

    <Layer queryable="0">
      <Name>themis</Name>
      <Title>Themis IR mosaic</Title>
      <Abstract>
        ASU Themis IR mosaic
      </Abstract>
      <LatLonBoundingBox minx="-180" miny="-90" maxx="180" maxy="90"/>
      <Style>
        <Name>default</Name>
        <Title>(default) Default style</Title>
      </Style>
      <ScaleHint min="10" max="10000"/>
      <MinScaleDenominator>100000</MinScaleDenominator>
    </Layer>

    <Layer queryable="0">
      <Name>mars</Name>
      <Title>MDIM 2.1</Title>
      <Abstract>
        USGS MDIM 2.1 mosaic. http://astrogeology.usgs.gov/Projects/MDIM21/
      </Abstract>
      <LatLonBoundingBox minx="-180" miny="-90" maxx="180" maxy="90"/>
      <Style>
        <Name>default</Name>
        <Title>(default) Default style</Title>
      </Style>
      <ScaleHint min="10" max="10000"/>
      <MinScaleDenominator>100000</MinScaleDenominator>
    </Layer>

    <Layer queryable="0">
      <Name>mola</Name>
      <Title>MOLA elevation</Title>
      <Abstract>
        Mars elevation from MOLA
      </Abstract>
      <LatLonBoundingBox minx="-180" miny="-90" maxx="180" maxy="90"/>
      <Style>
        <Name>default</Name>
        <Title>(default) Default style</Title>
      </Style>
      <Style>
        <Name>short_int</Name>
        <Title>Request PNG with this style to get short int data, elevation in meters </Title>
      </Style>
      <ScaleHint min="10" max="10000"/>
      <MinScaleDenominator>100000</MinScaleDenominator>
    </Layer>

    <Layer queryable="0">
      <Name>moc_na</Name>
      <Title>MOC Narrow Angle camera mosaic</Title>
      <Abstract>
	A mosaic of the MOC Narrow Angle images.
      </Abstract>
      <LatLonBoundingBox minx="-180" miny="-90" maxx="180" maxy="90"/>
      <Style>
        <Name>default</Name>
        <Title>(default) Default style</Title>
      </Style>
      <Style>
        <Name>color</Name>
        <Title>colorized style</Title>
      </Style>
      <Style>
        <Name>wild_color</Name>
        <Title>wildly colorized</Title>
      </Style>
      <ScaleHint min="10" max="10000"/>
      <MinScaleDenominator>100000</MinScaleDenominator>
    </Layer>

  </Layer>

</Capability>
</WMT_MS_Capabilities>